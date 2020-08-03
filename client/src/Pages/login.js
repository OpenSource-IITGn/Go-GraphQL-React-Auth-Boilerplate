import React, { Component } from 'react'
import CustomNavbar from '../Components/navbar'
import LoginForm from '../Components/loginForm'

function Login(props) {
    return (
        <div>
            <CustomNavbar {...props} />
            <div className="body-page">
                <LoginForm {...props} />
            </div>
        </div>
    )
}


export default Login;