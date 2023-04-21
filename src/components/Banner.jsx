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
            <h4 className={MainCSS.subText}>
              The Award Winning Company In Providing Quality Electrical
              Services.
            </h4>
            <a
              href="https://wa.me/+233596840018"
              className="btn btn-light btn-lg py-2 mt-3"
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
