import React from "react";
import { Card } from "react-bootstrap";
import styles from "./StatCard.module.css";

const StatCard = (props) => {
  const iconClasses = [props.icon, styles.icon];
  const icon = <i className={iconClasses.join(" ")} aria-hidden="true"></i>;

  return (
    <Card
      style={{
        width: "18rem",
        display: "inline-block",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <Card.Body style={{ textAlign: "center" }}>
        <div className={styles.polygon}>{icon}</div>
        <Card.Title className={styles.title} style={{ textAlign: "center" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
