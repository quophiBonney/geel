import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CEO2 from "../../src/images/ceo2.jpg";
import CEO from "../../src/images/ceo.jpg";
import MainCSS from "../App.module.css";
import {BsQuote} from "react-icons/bs";
const About = () => {
  return (
    <Container fluid className={MainCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="mt-5 mb-3 px-4"
          id={MainCSS.ceoSec}
        >
          <img
            src={CEO}
            className="img-fluid img-responsive"
            alt="Gilbert Tetteh"
            id={MainCSS.ceoImg}
          />
          <div className={MainCSS.overlay}>
            <img
              src={CEO2}
              className="img-fluid img-responsvie px-4"
              alt="Gilbert Tetteh"
              id={MainCSS.ceoImg}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} className="mt-5 mb-3 px-4">
          <p className="text-dark mt-5">
            <BsQuote id={MainCSS.quote} />
            At our electrical engineering firm, we are committed to delivering
            top-quality services to meet your unique needs. Our team of skilled
            engineers and technicians is dedicated to providing innovative
            solutions that are reliable, efficient, and cost-effective. We
            understand the challenges you face in today's rapidly changing
            world, and we are constantly striving to stay ahead of the curve.
            Thank you for your continued trust in our company. We look forward
            to working with you and helping you achieve your goals.
            <BsQuote id={MainCSS.rotateQuote} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
