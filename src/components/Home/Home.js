import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyPicture from "../../Assets/mypic.jpg";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const backgroundColour = "#ffffff"
  return (
    <section style={{ backgroundColour }}>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               Creativity meets Technology<br></br>
              </h1>

              <h3 className="heading-name">
              Hi, I'm Ishita Janwale, a web developer turning code into captivating digital art. Join me on this journey where every keystroke is a brushstroke, creating seamless user experiences.
              </h3>
              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={MyPicture}
                alt="mypicture"
                className="img-fluid"
                style={{ maxHeight: "450px" , borderRadius: "80%", boxShadow: "0 0 20px 0 rgb(194,152,167)" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>        
      <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ishita1022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/IJanwale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishitajanwale/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
    </section>
  );
}

export default Home;
