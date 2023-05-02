import React from "react";
import MainCSS from "../App.module.css";
import ServiceImg from "../../src/images/wiring.jpg";
import Gil4 from "../../src/images/gil4.jpg";
import Gil5 from "../../src/images/gil5.jpg";
import Gil8 from "../../src/images/gil8.jpg";
import Gil6 from "../../src/images/gil6.jpg";
import CCTV from "../../src/images/cctv.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import Gil3 from "../../src/images/gil3.jpg";
import {Container, Row, Col, Carousel, Button} from "react-bootstrap";
const Services = () => {
  return (
    <Container fluid className={MainCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={6}
          className="mt-5 px-4"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <p className={MainCSS.serviceTitle}>
            We specialize in designs of electrical blue print, troubleshooting,
            fire alarm systems, domestic wiring, access control and cctv & data
            systems.
          </p>
          <Carousel indicators={false} controls={false}>
            <Carousel.Item interval={1000}>
              <img
                src={CCTV}
                alt=""
                className="img-fluid img-responsive"
                id={MainCSS.serviceImg}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={Gil8}
                alt=""
                className="img-fluid img-responsive"
                id={MainCSS.serviceImg}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={Gil6}
                alt=""
                className="img-fluid img-responsive"
                id={MainCSS.serviceImg}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={Gil4}
                alt=""
                className="img-fluid img-responsive"
                id={MainCSS.serviceImg}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={Gil5}
                alt=""
                className="img-fluid img-responsive service-img"
                id={MainCSS.serviceImg}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={6}
          className="mt-5 px-4"
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} className="">
              <img
                src={Gil3}
                alt=""
                className="img-fluid img-responsive service-img"
                id={MainCSS.serviceTwo}
              />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="">
              <img
                src={ServiceImg}
                alt=""
                className="img-fluid img-responsive service-img"
                id={MainCSS.serviceTwo}
              />
            </Col>
          </Row>
          <p className="text-dark mt-3">
            Our thoughtfully designed curriculum covers everything that a
            well-rounded electrician needs to know to become a performant
            engineer, from domestic wiring down cctv installation and access
            control, to advanced electrical engineering concepts and tools.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
