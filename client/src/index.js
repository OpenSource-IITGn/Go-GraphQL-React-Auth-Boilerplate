import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from "react-cookie";

import App from './App';
import { useAppApolloClient } from './hooks/apolloClient';

import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';

// const token = Cookies.get('token') || '';

// const client = new ApolloClient({
//   uri: 'http://localhost:8080/query',
//   headers: {
//     authorization: `Bearer ${token}`
//   },
//   cache: new InMemoryCache()
// })

const apolloClient = useAppApolloClient();
console.log("apolloClient.link", apolloClient.link)
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
