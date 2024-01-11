import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 className="heading" style={{ fontSize: "2.1em", paddingBottom: "20px"}}>ABOUT ME</h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
   
          </Col>
        </Row>

        <h1 className="professional-heading">
          <strong className="skillset-heading">Professional Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="professional-heading">
          <strong className="skillset-heading">Tools</strong> 
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
