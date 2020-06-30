import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import "./PrimaryHeading.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const PrimaryHeading = () => {
  const clickHandler = () => {
    console.log("Button was clicked!");
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const code = "</>";

  return (
    <Container>
      <h1 className="PrimaryHeading" data-aos="fade-right">
        Hello, I'm <span className="name">Joy Biswas</span>.
      </h1>
      <h1 className="PrimaryHeading" data-aos="fade-left">
        I'm a full-stack web developer {code}.
      </h1>
      <Button title="View my work" click={clickHandler} />
    </Container>
  );
};

export default PrimaryHeading;
