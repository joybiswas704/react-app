import React from "react";
import "./IntroCard.css";
import { Card } from "react-bootstrap";

const IntroCard = (props) => {
  return (
    <Card
      style={{
        display: "inline-block",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <Card.Body style={{ textAlign: "center" }}>
        <div className="polygon"></div>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Text className="desc">{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IntroCard;
