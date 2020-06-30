import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import NavigationBar from "../Components/NavigationBar/NavgationBar";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import StatCard from "../Components/StatCard/StatCard";
import IntroCard from "../Components/IntroCard/IntroCard";
import SkillsStat from "../Components/SkillsStat/SkillsStat";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <SectionHeading title="About" />
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
