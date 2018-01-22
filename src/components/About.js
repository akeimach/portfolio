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
                <li><a href="mailto:alyssakeimach@gmail.com?Subject=Saw%20your%20portfolio..." rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="./images/email_icon.png" alt="email" /> Email</a></li>
                <li><a href="https://github.com/akeimach" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="./images/github_icon.png" alt="github" /> Github</a></li>
                <li><a href="https://www.linkedin.com/in/akeimach/" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="./images/linkedin_icon.png" alt="linkedin" /> LinkedIn</a></li>
                <li><a href="https://stackoverflow.com/users/4525770/alyssakm" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="./images/stackoverflow_icon.png" alt="stackoverflow" /> StackOverflow</a></li>
                <li><a href="https://www.instagram.com/alyssakmac/" target="_blank" rel="noopener noreferrer"><img style={{maxHeight: "35px", verticalAlign: "bottom"}} src="./images/instagram_icon.png" alt="instagram" /> Instagram</a></li>
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