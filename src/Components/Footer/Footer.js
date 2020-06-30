import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Col style={{ color: "white" }}>
            <i className="fa fa-copyright" aria-hidden="true">
              <div className="copyright"> 2020 Joy Biswas</div>
            </i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
