import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Secret from './Components/secret';
import ProtectedRoute from './Routes/protected';

function App() {

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
      <Route exact path="/signup" render={(routeProps) => <Signup {...routeProps} />} />
      <Route exact path="/login" render={(routeProps) => <Login {...routeProps} />} />
      <ProtectedRoute exact path="/secret" component={Secret} />
    </Switch>
  );
}

export default App;
