import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import MainCSS from "../App.module.css";
function Counter() {
  const [clients, setClients] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [recommendations, setRecommendation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClients(clients => {
        if (clients < 500) {
          return clients + 1;
        } else {
          clearInterval(interval);
          return clients;
        }
      });
    }, 0);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkers(workers => {
        if (workers < 120) {
          return workers + 1;
        } else {
          clearInterval(interval);
          return workers;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setRecommendation(recommendations => {
        if (recommendations < 300) {
          return recommendations + 1;
        } else {
          clearInterval(interval);
          return recommendations;
        }
      });
    }, 0);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container className={MainCSS.excitedContainer}>
      <Row>
        <Col sm={12} md={12} lg={12} className="text-center">
          <h3 className={MainCSS.discover}>Discover Our Credibility</h3>
        </Col>
        <Col sm={12} md={4} lg={4} className="text-center mt-5 px-5">
          <center>
            <div className={MainCSS.line}></div>
          </center>
          <h2 className="text-dark" id={MainCSS.number}>
            {clients}+
          </h2>
          <h3 className={MainCSS.caption}>Clients</h3>
        </Col>
        <Col sm={12} md={4} lg={4} className="text-center mt-5 px-5">
          <center>
            <div className={MainCSS.line}></div>
          </center>
          <h3 className="text-dark" id={MainCSS.number}>
            {workers}+
          </h3>
          <h3 className={MainCSS.caption}>Workers</h3>
        </Col>
        <Col sm={12} md={4} lg={4} className="text-center mt-5 px-5">
          <center>
            <div className={MainCSS.line}></div>
          </center>
          <h3 className="text-dark" id={MainCSS.number}>
            {recommendations}+
          </h3>
          <h3 className={MainCSS.caption}>Recommendations</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
