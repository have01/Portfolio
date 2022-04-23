import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
           
              isBlog={false}
              title="Ecommerce"
              description="Ecommerce build with react.js, Material-UI. Have features which allows user for search filter & add to cart products."
              link="https://github.com/have01/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Weather app"
              description="Weaher app build with react.js.Have feautres of search where user can search of particular city and get weather details"
              link="https://github.com/have01/Weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
              isBlog={false}
              title="Todo-list"
              description="Todo-list build with react.js and local storage where user can add daily task and acess any-time"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              isBlog={false}
              title="Api Data using Javascript"
              description="Build with HTML,Css & Javascript with the help of XMLHttpRequest. "
              link="https://github.com/have01/India-Data-using-XMLHttpReq"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="BMI Calculator"
              description="Bmi calculator using Javascript. where user can calculate its bmi by simply input height and weight"
              link="https://github.com/have01/Bmi-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Calorie tracker"
              description="Calorie tracker using html css javascript where user can check its day to day calorie intake"
              link="https://calorie-tracket.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
