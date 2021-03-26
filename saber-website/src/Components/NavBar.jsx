import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";




const NavigationBar = () => {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Saber Realty Advisors</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Gallery</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Martin Please Help THNX
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
  };
  export default NavigationBar;
  