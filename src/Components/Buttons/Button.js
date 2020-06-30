import React, { useState, useEffect } from "react";
import styles from "./Button.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Button = (props) => {
  const iconHover = styles.icon;

  const [state, stateChange] = useState({
    iconStyles: ["fa", "fa-arrow-right"],
    buttonStyle: [styles.btn],
  });

  const mouseOverHandler = () => {
    stateChange({
      iconStyles: ["fa", "fa-arrow-right", iconHover],
      buttonStyle: [styles.btn],
    });
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const arraowIcon = (
    <i className={state.iconStyles.join(" ")} aria-hidden="true"></i>
  );
  return (
    <a href="https://github.com/joybiswas704" target="blank">
      <div
        className={state.buttonStyle.join(" ")}
        onClick={props.click}
        onMouseOver={mouseOverHandler}
      >
        {props.title} {arraowIcon}
      </div>
    </a>
  );
};

export default Button;
