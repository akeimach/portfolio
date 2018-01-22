import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";


const Migreni = (props) => {
  return (
    <div className="project-container">
      <br /><br /><br />
      <Link to="/">Back to Home</Link>
      <Row>
        <Col size="1"></Col>
        <Col size="10">
          <h3 className="project-title">Mígreni</h3>
          <span><a href="https://glacial-fortress-86427.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/Alferguson/migreni" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <br /><br />
          <Row>
            <p>Mígreni was created to fill a need for a simple migraine diary app. Mígreni streamlines the migraine logging process, where potential triggers and user statistics are pre-loaded into each journal entry.</p>
          </Row>
          <br />
          <Row>
            <Col size="6">
              <img style={{maxHeight: "400px"}} className="center-img" src="./images/log_migraine.gif" alt="Log migraine" />
            </Col>
            <Col size="1"></Col>
            <Col size="5">
              <br /><br />
              <p>The app is designed so users can log their migraine quickly and effectively, or update each migraine as needed.</p>
            </Col>
          </Row>
          <br />
          <Row>
            <p>A MySQL database is used on the back end to store users migraines and their properties. Users can view graphs of intensity over time.</p>
          </Row>
          <br />
          <Row>
            <img style={{maxHeight: "400px"}} className="center-img" src="./images/chart_migraine.gif" alt="Chart migraine" />
          </Row>
          <br /><br />
        </Col>
        <Col size="1"></Col>
      </Row>
    </div>
  );
};

export default Migreni;