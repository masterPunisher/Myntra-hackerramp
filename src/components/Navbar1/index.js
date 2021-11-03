import React, { Component } from "react";
import {Container,Nav ,NavDropdown, Navbar } from 'react-bootstrap';


    class Navbar1 extends Component {

      render() {

        

        return (
            <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Myntra</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
          <NavDropdown.Item href="/myorders">My Orders</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Myntra Studio</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
         
        );

      }

    }

    export default Navbar1;