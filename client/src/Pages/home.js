import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import CustomNavbar from '../Components/navbar';
import '../styles/global.css';
import '../styles/home.css';

function Home(props) {

    return (
        <div style={{ height: '100vh' }}>
            <CustomNavbar {...props} />
            <div className="body-page">
                <div className="centered-container">
                    <h2>Go - Over - flow</h2>
                    <ButtonToolbar className="auth-buttons">
                        <Link to="/signup"><Button appearance="default">Sign Up</Button></Link>
                        <Link to="/login"><Button appearance="primary">Login</Button></Link>
                    </ButtonToolbar>
                </div>

            </div>

        </div>
    )
}

export default Home;
