import React, { Component } from "react";
import {Container,Nav ,NavDropdown, Navbar } from 'react-bootstrap';


    class Navbar1 extends Component {

      render() {

        

        return (
            <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Myntra</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">WishList</Nav.Link>
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">My Account</NavDropdown.Item>
          <NavDropdown.Item href="/myorders">My Orders</NavDropdown.Item>
          <NavDropdown.Item href="/">Myntra Studio</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
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