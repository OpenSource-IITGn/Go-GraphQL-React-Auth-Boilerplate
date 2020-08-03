import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles/global.css';

const USER_SIGNUP = gql`
mutation signUp($email: String!, $password: String!, $firstName: String!, $lastName: String!){
    signUp(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      ok
      error
      user {
        id
        email
        firstName
        lastName
        bio
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;


// class SignupForm extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             firstName: "",
//             lastName: "",
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange = (value, evt) => {
//         this.setState({
//             [evt.target.name]: value
//         })
//     }

//     render() {
//         const { firstName, lastName, email, password } = this.state

//         return (
//             <div className="centered-container">
//                 <Mutation mutation={USER_SIGNUP} variables={{ email, password, firstName, lastName }}>
//                     {(signUp, { loading, error, data }) => (
//                         <Form layout="horizontal" onSubmit={
//                             (status, e) => {
//                                 e.preventDefault();
//                                 signUp({
//                                     variables: {
//                                         name: email,
//                                         password: password,
//                                         firstName: firstName,
//                                         lastName: lastName,
//                                     }
//                                 })
//                                 this.setState({
//                                     email: '',
//                                     password: '',
//                                     firstName: '',
//                                     lastName: '',
//                                 })
//                                 console.log("data sent succesfully");
//                                 console.log(data);
//                                 this.props.history.push('/login');
//                             }}>
//                             <FormGroup>
//                                 <ControlLabel>First Name</ControlLabel>
//                                 <FormControl name="firstName" onChange={this.handleChange} value={this.state.firstName} />
//                                 <HelpBlock>Required</HelpBlock>
//                             </FormGroup>
//                             <FormGroup>
//                                 <ControlLabel>Last Name</ControlLabel>
//                                 <FormControl name="lastName" onChange={this.handleChange} value={this.state.lastName} />
//                             </FormGroup>
//                             <FormGroup>
//                                 <ControlLabel>Email</ControlLabel>
//                                 <FormControl name="email" type="email" onChange={this.handleChange} value={this.state.email} />
//                                 <HelpBlock tooltip>Required</HelpBlock>
//                             </FormGroup>
//                             <FormGroup>
//                                 <ControlLabel>Password</ControlLabel>
//                                 <FormControl name="password" type="password" onChange={this.handleChange} value={this.state.password} />
//                                 <HelpBlock tooltip>Required</HelpBlock>
//                             </FormGroup>
//                             <FormGroup>
//                                 <ButtonToolbar>
//                                     <Button type="submit" appearance="primary">Sign Up</Button>
//                                 </ButtonToolbar>
//                             </FormGroup>
//                         </Form>
//                     )}
//                 </Mutation>

//             </div>
//         )
//     }
// }

const SignupForm = () => {
    return (
        <h2>Hello</h2>
    )
};

export default SignupForm;