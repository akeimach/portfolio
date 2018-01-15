import React from "react";
import { Row, Col } from "./Grid";
import { Collapse } from "react-collapse";


const About = (props) => {
  return (
    <div className="about-me-container">
      <Collapse isOpened={props.aboutMeOpen}>
        <Row>
          <Col size="1"></Col>
          <Col size="3">
            <br />
            <Row>
              <img style={{maxHeight: "230px"}} src="./images/profile_1.jpg" alt="Alyssa at the Grand Canyon" />
            </Row>
            <br />
            <Row>
              <ul>
                <li><a href="mailto:alyssakeimach@gmail.com?Subject=Saw%20your%20portfolio..." rel="noopener noreferrer">Email</a></li>
                <li><a href="https://github.com/akeimach" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/akeimach/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://stackoverflow.com/users/4525770/alyssakm" target="_blank" rel="noopener noreferrer">StackOverflow</a></li>
              </ul>
            </Row>
            <br /><br />
          </Col>
          <Col size="1"></Col>
          <Col size="6">
            <br />
            <p>I’m a critical thinker who pays attention to detail, loves collaboration, and has a degree in Computational Physics. For the past two years I worked as an aerospace software engineer before pivoting to web development, where I enjoy its potential to impact large audiences. In my free time I work as a math and physics tutor, breaking down complex concepts for students to understand instead of memorize. I seek to create technology that will directly empower these students and other end users in the scientific community.</p>
            <br />
            <p>Reach out, I'd love to talk!</p>
            <br />
          </Col>
          <Col size="1"></Col>
        </Row>
      </Collapse>
    </div>
  );
}

export default About;