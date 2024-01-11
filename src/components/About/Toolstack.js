import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiIntellijidea,
  SiMacos,
} from "react-icons/si";

const tools = [
  { icon: <SiMacos />, label: "macOS" },
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiIntellijidea />, label: "IntelliJ" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiSlack />, label: "Slack" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tool-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
