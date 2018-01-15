import React from "react";
import { Row, Col } from "./Grid";
import About from "./About";


const Nav = (props) => {
  return (
    <div className="overlay-container">
      <Row>
        <Col size="12">
          <div className="about-me-font" onClick={props.toggleAboutMe}>
            <span className="align-left">Alyssa Keimach</span>
            {props.aboutMeOpen ? (
              <span className="align-right">&times; Close</span>
            ) : (
              <span className="align-right">About</span>
            )}
          </div>
        </Col>
        <About
          aboutMeOpen={props.aboutMeOpen}
        />
      </Row>
    </div>
  );
}

export default Nav;

