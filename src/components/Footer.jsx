import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import MainCSS from "../App.module.css";
import {BsInstagram, BsTiktok, BsWhatsapp} from "react-icons/bs";
function Footer() {
  return (
    <Container fluid className="mt-5" id={MainCSS.footer}>
      <Row>
        <Col sm={12} md={4} lg={4} className="mt-3 text-center px-5 mb-3">
          <h4 className="text-uppercase" id={MainCSS.footerLinkTitle}>
            OPEN HOURS
          </h4>
          <p className={MainCSS.footerP}>
            Monday - Saturday
            <br />
            9am - 5pm GMT
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-3 text-center px-5 mb-3">
          <h4 className="text-uppercase" id={MainCSS.footerLinkTitle}>
            Address
          </h4>
          <p className={MainCSS.footerP}>
            Kumasi - Ashanti Region
            <br />
            +233554622399
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-3 text-center px-5 mb-3">
          <h4 className="text-uppercase" id={MainCSS.footerLinkTitle}>
            Follow Us
          </h4>
          <a
            href="https://instagram.com/tettehgilbert81?igshid=ZDdkNTZiNTM"
            id={MainCSS.socialIcons}
          >
            <BsInstagram />
          </a>
          <a href="https://wa.me/+233554622399" id={MainCSS.socialIcons}>
            <BsWhatsapp />
          </a>
          <a href="https://tiktok.com/@tetteh809" id={MainCSS.socialIcons}>
            <BsTiktok />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
