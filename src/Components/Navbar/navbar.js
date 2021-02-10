import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './navbar.css';

function navbar(){
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" id={'company-headingSize'}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
            <Nav className="mr-auto">
                <Nav.Link href="#seeds" id={'hover-color'} >Seeds</Nav.Link>
                <Nav.Link href="#plants" id={'hover-color'} >Plants</Nav.Link>
                <Nav.Link href="#pots" id={'hover-color'} >Pots</Nav.Link>
                <Nav.Link href="#tools" id={'hover-color'} >Tools</Nav.Link>
                <Nav.Link href="#contact" id={'hover-color'} >Contact Us</Nav.Link>
                <Nav.Link href="#about" id={'hover-color'} >About Us</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>);
}

export default navbar;