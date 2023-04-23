import React from "react";
import Logo from "../../src/images/logo.jpg";
import {Nav, Navbar, Container} from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="sticky-top navbar">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              className="logo img-fluid img-responsive"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a
                href="https://wa.me/+233596840018"
                className="btn btn-light btn-lg py-2"
                id="btn"
              >
                Book Us Now
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
