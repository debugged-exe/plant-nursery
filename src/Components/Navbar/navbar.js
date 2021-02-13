import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './navbar.css';

function navbar() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" id={'company-headingSize'}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className={""}>
            <Nav className="mr-auto">
                <NavDropdown title="Seeds" id="basic-nav-dropdown" className={'dropdown-title-hover-color'}>
                    <NavDropdown.Item href="#action/3.1" id={'hover-color'}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id={'hover-color'}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id={'hover-color'}>Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Plants" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id={'hover-color'}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id={'hover-color'}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id={'hover-color'}>Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pots" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id={'hover-color'}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id={'hover-color'}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id={'hover-color'}>Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tools" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id={'hover-color'}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id={'hover-color'}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id={'hover-color'}>Something</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact" id={'basic-nav-dropdown'}>Contact Us</Nav.Link>
                <Nav.Link href="#about" id={'basic-nav-dropdown'}>About Us</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>);
}

export default navbar;