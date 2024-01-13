import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view border-0" style={{ backgroundColor: "#FBF9F7" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ul>
              <li> Hi Everyone, I am <span className="purple">Ishita Janwale </span> </li>
              <li> I am a Graduate in Information Systems at Northeastern University </li>
              <li>I have completed my Bachelors in Technology in Computer Engineering </li>
              <li>Over the past four years, I have actively contributed to diverse full-stack development projects, showcasing my proficiency and commitment to creating comprehensive solutions </li>
            </ul>
            Relevant Coursework:
          </p>
          <ul style={{ listStyleType: 'square' }}>
            <li className="about-activity">
               Web Design and Development
            </li>
            <li className="about-activity">
               Application Engineering and Development
            </li>
            <li className="about-activity">
               Object Oriented Design
            </li>
            <li className="about-activity">
               Design Patterns
            </li>
            <li className="about-activity">
               Cloud Computing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          {/* <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
