import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {GiCctvCamera, GiRingingAlarm, GiWireCoil} from "react-icons/gi";
const VariousService = () => {
  return (
    <Container fluid className="mt-5 mb-3 px-4">
      <Row className="justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service px-4 text-center"
        >
          <GiCctvCamera className="service-icon" />
          <h4 className="text-uppercase mt-3">CCTV Data & Systems</h4>
          <p className="text-dark">
            Fire alarm systems are essential safety devices that detect and
            alert people to the presence of fire or smoke in a building. They
            are designed to quickly detect and respond to potential fire
            hazards, providing early warning to occupants and facilitating
            prompt evacuation.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service text-center px-4"
        >
          <GiRingingAlarm className="service-icon" />
          <h4 className="text-uppercase mt-3">fire alarm systems</h4>
          <p className="text-dark service-desc">
            As electrical engineering firm we provide security solutions for
            both residential and commercial properties. These services involve
            the installation of cameras, recording devices, and other necessary
            equipment to monitor and record activities in a specific area.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          className="mt-5 mb-3 various-service text-center px-4"
        >
          <GiWireCoil className="service-icon" />
          <h4 className="text-uppercase mt-3">domestic wiring</h4>
          <p className="text-dark service-desc">
            Gilbert Electrical Engineering Ltd offers a full range of domestic
            wiring and electrical services to suit your needs – from moving a
            light switch to complete house rewires.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default VariousService;
