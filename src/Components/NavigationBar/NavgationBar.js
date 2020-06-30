import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar className="nav" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navItem mainItem" href="#header">
            Home
          </Nav.Link>
          <Nav.Link className="navItem" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="navItem" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
