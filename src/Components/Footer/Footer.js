import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

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
          <Col style={{ color: "white", textAlign: "center" }}>
            <i className="fa fa-copyright" aria-hidden="true">
              <div className="copyright"> 2020 Joy Biswas</div>
            </i>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Col style={{ color: "white", textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/joy-biswas-dev/"
              target="blank"
              className="icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/joybiswas704"
              target="blank"
              className="icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/thejoyof_photography/?hl=en"
              target="blank"
              className="icon"
            >
              <InstagramIcon />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
