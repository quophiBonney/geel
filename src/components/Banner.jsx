import React from "react";
import MainCSS from "../App.module.css";
import {Container, Row, Col} from "react-bootstrap";

function Banner() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className={MainCSS.bannerBg}>
          <div
            className="text-center"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h1 className={MainCSS.compName}>
              Gilbert Electrical <br />
              Engineering Limited
            </h1>
            <p className={MainCSS.subText}>
              The Award Winning Company In Providing Quality Electrical
              Services.
            </p>
            <a
              href="https://wa.me/+233554622399"
              className="btn btn-lg py-2 mt-3 mb-5"
              id={MainCSS.contactBtn}
            >
              Contact Us
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
