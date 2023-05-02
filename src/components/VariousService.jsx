import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {GiCctvCamera, GiRingingAlarm, GiWireCoil} from "react-icons/gi";
import MainCSS from "../App.module.css";
const VariousService = () => {
  return (
    <Container fluid className={MainCSS.excitedContainer}>
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service px-4 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <GiCctvCamera className={MainCSS.serviceIcon} />
          <h4 className="text-uppercase mt-3">CCTV Data & Systems</h4>
          <p className="text-dark">
            As electrical engineering firm we provide security solutions for
            both residential and commercial properties.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service text-center px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <GiRingingAlarm className={MainCSS.serviceIcon} />
          <h4 className="text-uppercase mt-3">fire alarm systems</h4>
          <p className="text-dark">
            Fire alarm systems are essential safety devices that detect and
            alert people to the presence of fire or smoke in a building.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service text-center px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <GiWireCoil className={MainCSS.serviceIcon} />
          <h4 className="text-uppercase mt-3">domestic wiring</h4>
          <p className="text-dark">
            Gilbert Electrical Engineering Ltd offers a full range of domestic
            wiring and electrical services to suit your needs
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default VariousService;
