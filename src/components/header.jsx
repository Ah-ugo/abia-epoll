import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export function Header() {
  const logoimg = require("../sources/Abia EPoll-logo-white (1).png");
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bgcolor"
        variant="dark"
        fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logoimg} width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navBtn" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#meet">Contact Us</Nav.Link>
              <Nav.Link href="/categories">Cast A Vote</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button className="btn btn-light">
                  <label className="login-btn1 bg-light">Login</label>
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="btn btn-secondary">
                  <label className="login-btn2 bg-secondary">
                    Create Account
                  </label>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
