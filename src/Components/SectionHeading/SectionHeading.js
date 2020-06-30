import React, { useEffect } from "react";
import "./SectionHeading.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionHeading = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" style={{ textAlign: "center", margin: "5rem" }}>
      <h1 className="sectionHeading">{props.title}</h1>
      <div className="hb"></div>
    </div>
  );
};

export default SectionHeading;
