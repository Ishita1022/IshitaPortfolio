import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitter from "../../Assets/Projects/twitter.gif";
import onlineV from "../../Assets/Projects/onlineV.gif";
import cloud from "../../Assets/Projects/cloud.gif";
import barter from "../../Assets/Projects/Barter.gif";
import daycare from "../../Assets/Projects/daycare.gif";
import business from "../../Assets/Projects/business.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="professional-heading">
        <strong className="skillset-heading">MY PROJECTS:</strong> 
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barter}
              isBlog={false}
              title="Barter-app"
              description="The project is a React-based application supporting a barter system for buying and selling goods without using money. Utilizing MongoDB and RESTAPI, it includes features like messaging, bidding, image uploads, and email confirmation. Designed with Adobe XD, the platform offers a user-friendly and intuitive experience."
              ghLink="https://github.com/neu-mis-info-6150-spring-2023/final-project-group-barter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={business}
              isBlog={false}
              title="Business Relief Portal"
              description="A desktop app in Java Swing and Kotlin, using MVC patterns to expedite government funding for small businesses. The app integrates MySQL and third-party APIs, automates user authentication by scanning uploaded documents, and streamlines the funding request process."
              ghLink="https://github.com/goyalankit28/AED_Business_Relief_Program"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Native Web Application"
              description="This cloud project enabled assignment CRUD operations, with users posting and submitting assignments. AWS RDS securely stored user information and assignment details, using security groups for protection. Packer ensured consistent deployment through AWS AMIs. Elastic load balancers and auto-scaling optimized resource management, and Amazon S3 handled efficient storage, Used Pulumi for Infrastructure as Code ."
              ghLink="https://github.com/CSYE6225CloudIshitaJanwale/webapp"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Railway Twitter Administration System"
              description="This full-stack project captures and categorizes tweets from Twitter into Emergency and Feedback using the Naive Bayes ML algorithm. The ReactJS application enables users to access and address both types of tweets on one page. AWS services (EC2, RDS, S3) establish a robust and scalable cloud architecture for efficient tweet processing and immediate redressal."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daycare}
              isBlog={false}
              title="DayCare Project"
              description="A daycare registration app optimizing teacher and student assignments, achieving a 70% efficiency improvement. Automated enrollment procedures reduced processing time by two days. Utilized Model-View-Controller and Factory design patterns for streamlined model creation."
              ghLink="https://github.com/CSYE6200-Object-Oriented-Design/finalproject-Ishita1022/tree/main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineV}
              isBlog={false}
              title="Online Voting System using Blockchain"
              description="A secure online voting system using Azure blockchain, Python for backend, and HTML, CSS, and JavaScript for the frontend. Enhanced voter authentication through Aadhaar API(12-digit unique identification number issued by the Unique Identification Authority of India), utilizing biometrics for added security. The project ensures a reliable and transparent electoral system."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
