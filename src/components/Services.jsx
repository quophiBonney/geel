import React from "react";
import MainCSS from "../App.module.css";
import ServiceImg from "../../src/images/wiring.jpg";
import Gil4 from "../../src/images/gil4.jpg";
import Gil5 from "../../src/images/gil5.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsWhatsapp,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import Gil3 from "../../src/images/gil3.jpg";
import {Container, Row, Col, Carousel, Button} from "react-bootstrap";
const Services = () => {
  return (
    <Container fluid class="mt-5">
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={6}
          className="mt-5"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h3 className={MainCSS.serviceTitle}>
            We specialize in designs of electrical blue print, troubleshooting,
            fire alarm systems, domestic wiring, access control and cctv & data
            systems.
          </h3>
          <Carousel indicators={false} controls={false}>
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
          className="mt-5"
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
            well-rounded programmer needs to know to become a performant
            Engineer, from programming fundamentals and object-oriented
            programming, to advanced programming concepts and engineering tools.
          </p>
          <div className="text-center">
            <a href="" title="facebook">
              <BsFacebook className="social-icons" />
            </a>
            <a
              href="https://wa.me/+233554622399"
              className="text-success"
              title="whatsapp"
            >
              <BsWhatsapp className="social-icons" />
            </a>
            <a href="">
              <BsTwitter className="social-icons" title="twitter" />
            </a>
            <a
              href="https://instagram.com/tettehgilbert81?igshid=ZDdkNTZiNTM="
              className="text-danger"
              title="instagram"
            >
              <BsInstagram className="social-icons" />
            </a>
            <a
              href="https://www.tiktok.com/@tetteh809"
              title="tiktok"
              className="text-dark"
            >
              <BsTiktok className="social-icons" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
