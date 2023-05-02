import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import MainCSS from "../App.module.css";
import Logo from "../../src/images/logo.png";
import {HiMenuAlt3} from "react-icons/hi";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={MainCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="img-fluid"
            alt="BOS logo"
            id={MainCSS.navLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <HiMenuAlt3 className={MainCSS.toggleIcon} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className={MainCSS.btnGroup}>
              <Nav.Link>
                <a
                  href="https://wa.me/+233554622399"
                  className="btn"
                  id={MainCSS.loginBtn}
                >
                  Book Us Now
                </a>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
