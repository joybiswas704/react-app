import React from "react";
import "./SkillsStat.css";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsStat = (props) => {
  return (
    <div>
      <div className="item">{props.skillName}</div>
      <ProgressBar className="progressBar">
        <ProgressBar
          style={{ backgroundColor: "#11c2c9" }}
          now={props.skillPercentage}
          key={1}
          label={`${props.skillPercentage}%`}
        ></ProgressBar>
      </ProgressBar>
    </div>
  );
};

export default SkillsStat;
