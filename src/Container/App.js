import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import NavigationBar from "../Components/NavigationBar/NavgationBar";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import StatCard from "../Components/StatCard/StatCard";
import IntroCard from "../Components/IntroCard/IntroCard";
import SkillsStat from "../Components/SkillsStat/SkillsStat";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import MediaCard from "../Components/MaterialCard/MaterialCard";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img_photography from "../Assets/photography.jpg";
import img_music from "../Assets/musician.jpg";
import img_travel from "../Assets/header-3.jpg";

function App() {
  const statCardArray = [
    {
      icon: "fa fa-fighter-jet",
      title: "Fast",
      desc: "Fast load times and lag free interaction, my highest priority.",
    },
    {
      icon: "fa fa-mobile",
      title: "Responsive",
      desc: "My layouts will work on any device, big or small.",
    },
    {
      icon: "fa fa-lightbulb-o",
      title: "Intuitive",
      desc: "Strong preference for easy to use, intuitive UX/UI.",
    },
    {
      icon: "fa fa-rocket",
      title: "Dynamic",
      desc:
        "Websites don't have to be static, I love making pages come to life.",
    },
  ];

  const skillsArray = [
    { skillName: "Html5", skillPercentage: "90" },
    { skillName: "Css3, Sass", skillPercentage: "80" },
    { skillName: "JavaScript", skillPercentage: "90" },
    { skillName: "React.js", skillPercentage: "60" },
    { skillName: "Bootstrap, Material UI, Semantic UI", skillPercentage: "80" },
    { skillName: "Node.js, npm, GitHub", skillPercentage: "60" },
    { skillName: "SQL, Python, C++, dart", skillPercentage: "70" },
    { skillName: "Algorithm", skillPercentage: "70" },
    { skillName: "Data Structure", skillPercentage: "70" },
  ];
  const skillsList = skillsArray.map((skill, index) => (
    <SkillsStat
      skillName={skill.skillName}
      skillPercentage={skill.skillPercentage}
      key={index}
    />
  ));

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const statCardList = statCardArray.map((items, index) => (
    <StatCard
      icon={items.icon}
      title={items.title}
      desc={items.desc}
      key={index}
    />
  ));

  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <NavigationBar />
        <SectionHeading title="About Me" />
        <div data-aos="fade" style={{ textAlign: "center" }}>
          <React.Fragment>{statCardList}</React.Fragment>
        </div>
        <div>
          <div className="utility-margin"></div>
          <Container>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Col xs={12} md={12} lg={6} data-aos="fade-right">
                <IntroCard
                  title="Who's this guy?"
                  desc="Front end web developer with additional experience in flutter mobile development. Demonstrated history of working in the retail industry. Skilled in programming, Problem solving."
                />
              </Col>
              <Col xs={12} md={12} lg={6} data-aos="fade-left">
                <React.Fragment>{skillsList}</React.Fragment>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="utility-margin"></div>
      <div id="portfolio">
        <SectionHeading title="What inspires me?" />
        <Container>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <Col xs={12} md={4} lg={4} data-aos="fade-right">
              <MediaCard
                picture={img_photography}
                title="Photography"
                paragraph="I started photography as a hobby few years ago. I like to capture moment in my frame."
              />
            </Col>
            <Col xs={12} md={4} lg={4} data-aos="fade-up">
              <MediaCard
                picture={img_music}
                title="Music"
                paragraph="I belong to a muscian family. I play guitar and i mostly like folk music"
              />
            </Col>
            <Col xs={12} md={4} lg={4} data-aos="fade-left">
              <MediaCard
                picture={img_travel}
                title="Traveling"
                paragraph="I love to travel. I have a list of places i wanna travel before i die. "
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact">
        <SectionHeading title="Get In Touch" />
        <div data-aos="zoom-in">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
