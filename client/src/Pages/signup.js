import React, { Component } from 'react'
import CustomNavbar from '../Components/navbar'
import SignupForm from '../Components/signupForm'

function Signup(props) {
    return (
        <div>
            <CustomNavbar {...props} />
            <div className="body-page">
                <SignupForm {...this.props} />
            </div>
        </div>
    )

}

export default Signup;