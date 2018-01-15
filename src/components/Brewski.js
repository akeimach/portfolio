import React from "react";
import { Row, Col } from "./Grid";


const Brewski = (props) => {
  return (
    <div className="project-container">
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <br /><br /><br />
          <h3 className="project-title">Brewski</h3>
          <span><a href="https://brewski-beer-review.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/akeimach/brewski" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <Col size="7">
              <br />
              <p>Brewski is a web app for beer lovers. Upload or take a picture of a beer label to see it's reviews!</p>
              <br />
              <p>Brewski uses Google OAuth so users can log in and write reviews for any beer they've identified using the app.</p>
              <br />
            </Col>
            <Col size="5">
              <img style={{maxHeight: "400px"}} className="center-img" src="./images/two_hearted.png" alt="Bell's Two Hearted" />
            </Col>
          </Row>
          <Row>
            <Col size="6">
              <img style={{maxHeight: "650px"}} className="center-img" src="./images/two_hearted_info.png" alt="Bell's Two Hearted Information" />
            </Col>
            <Col size="6">
              <br /><br />
              <p>Each beer image is sent to Google Cloud Vision API for OCR, then the text results are sent to RateBeer and BreweryDB to retrieve information and reviews about each beer.</p>
              <br />
              <p>Brewski has a MySQL database where associations between user and beer tables are used to track each review.</p>
              <br />
              <p>Express, React, and Node make up the rest of the stack.</p>
            </Col>
          </Row>
          <br /><br />
        </Col>
        <Col size="1"></Col>
      </Row>
    </div>
  );
};

export default Brewski;