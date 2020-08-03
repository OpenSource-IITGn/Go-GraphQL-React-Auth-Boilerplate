import React, { useState } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import '../styles/global.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { useLoginMutation } from './../Queries/loginMutation';

const LoginForm = (props, { loading }) => {
    const [loginMutation, loginMutationResults] = useLoginMutation();

    const onSubmit = (values) => loginMutation(values.username, values.password);
    const [email, setEmail] = useState('azleblade@gmail.com');
    const [password, setPassword] = useState('azleblade');


    const handleSubmit = async () => {
        await loginMutation(email, password)
        props.history.push('/secret')
    }

    const handleChange = (value, evt) => {
        if (evt.target.name == 'email') {
            setEmail(value)
        } else if (evt.target.name == 'password') {
            setPassword(value)
        }
    }

    return (
        <div className="centered-container">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl name="email" type="email" onChange={handleChange} value={email} />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password" onChange={handleChange} value={password} />
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button type="submit" appearance="primary">Login</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    )
}
// class LoginForm extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: ""
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange = (value, evt) => {
//         this.setState({
//             [evt.target.name]: value
//         })
//     }

//     render() {
//         let { email, password } = this.state
//         return (
//             <Mutation mutation={USER_SIGNIN} variables={{ email, password }}>
//                 {(signIn, { loading, error, data }) => (
//                     <div className="centered-container">
//                         <Form onSubmit={
//                             (status, e) => {
//                                 e.preventDefault();
//                                 signIn({
//                                     variables: {
//                                         name: email,
//                                         password: password
//                                     }
//                                 })
//                                 this.setState({
//                                     email: '',
//                                     password: ''
//                                 })
//                                 console.log("data sent succesfully");
//                                 try {
//                                     console.log(data.signIn.ok);
//                                     if (data.signIn.ok) {
//                                         alert('login success')
//                                         this.props.history.push('/secret')
//                                     } else {
//                                         alert('failed :(')
//                                         this.props.history.push('/')
//                                     }
//                                 } catch{
//                                     alert('success failed')
//                                 }

//                             }
//                         }>
//                             <FormGroup>
//                                 <ControlLabel>Email</ControlLabel>
//                                 <FormControl name="email" type="email" onChange={this.handleChange} value={email} />
//                                 <HelpBlock tooltip>Required</HelpBlock>
//                             </FormGroup>
//                             <FormGroup>
//                                 <ControlLabel>Password</ControlLabel>
//                                 <FormControl name="password" type="password" onChange={this.handleChange} value={password} />
//                             </FormGroup>
//                             <FormGroup>
//                                 <ButtonToolbar>
//                                     <Button type="submit" appearance="primary">Login</Button>
//                                 </ButtonToolbar>
//                             </FormGroup>
//                         </Form>
//                     </div>
//                 )}
//             </Mutation>
//         )
//     }
// }

export default LoginForm;
