// Techstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";

const techStackItems = [
  "Java",
  "JavaScript",
  "NodeJS",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "React",
  "SQL",
  "MongoDB",
  "NextJS",
  "Github",
  "REST API",
  "C++",
  "PostgreSQL",
  "Python",
  "AWS",
  "Google Cloud",
  "Docker",
  "CI/CD",
];

function Techstack() {
  return (
    <Row className="tech-stack-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackItems.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons bounce">
          <h4>{tech}</h4>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
