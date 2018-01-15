import React from "react";
import { Row, Col } from "./Grid";


const CloudNV = (props) => {
  return (
    <div className="project-container">
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <br /><br /><br />
          <h3 className="project-title">CloudNV</h3>
          <span><a href="http://alyssakeimach.com/cloudnv/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/akeimach/cloudnv" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <img style={{maxHeight: "300px", width: "100%"}} className="center-img" src="./images/cumulus.jpg" alt="Cumulus clouds" />
          </Row>
          <br />
          <Row>
            <p>CloudNV is a mobile first web app using image recognition to identify images of percipitation clouds.</p>
            <br />
            <p>Images submitted to the app are sent to Google Cloud Vision API, then my algorithm sorts through the results to find the most likely matches for cloud type.</p>
          </Row>
          <br />
          <Row>
            <Col size="4">
              <br /><br />
              <p>This result is used to query the Wikipedia API, which finds summaries and facts about each cloud.</p>
              <br />
            </Col>
            <Col size="8">
              <img style={{maxHeight: "350px"}} className="center-img" src="./images/cumulus_description.png" alt="Cumulus cloud information" />
            </Col>
          </Row>
          <br /><br />
        </Col>
        <Col size="1"></Col>
      </Row>
    </div>
  );
};

export default CloudNV;