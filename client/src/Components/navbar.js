import { Navbar, Nav, Icon, Dropdown } from 'rsuite';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { useLogout } from './../hooks/auth';

function CustomNavbar(props) {

    const logout = useLogout()

    const handleLogout = async () => {
        console.log(typeof (logout))
        console.log(logout)

        await logout();
        alert('Successfuly Logged out')
        props.history.push('/')
    }

    return (
        <Navbar>
            <Navbar.Header>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                    <NavLink to="/signup"><Nav.Item>Signup</Nav.Item></NavLink>
                    <NavLink to="/login"><Nav.Item>Login</Nav.Item></NavLink>
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={handleLogout}>Log Out</Nav.Item>
                    <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>

    );

}

export default CustomNavbar;