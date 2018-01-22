import React from "react";
import { Row, Col } from "./Grid";
import { Link } from "react-router-dom";
import { React_Bootstrap_Carousel as ReactCarousel } from "react-bootstrap-carousel";


const Carousel = (props) => {
  return (
    <div className="carousel-container">
      <Row>
        <Col size="12">
          <ReactCarousel
            animation={true}
            slideshowSpeed={3500}
            className="carousel-slide"
            leftIcon=" "
            rightIcon=" "
          >
          <div className="carousel-item">
            <Link to="/brewski" className="square-link">
              <br />
              <h3>Brewski</h3>
              <p>Find beer reviews by taking a photo</p>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/cloudnv" className="square-link">
              <br />
              <h3>CloudNV</h3>
              <p>Identify precipitation cloud species</p>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/migreni" className="square-link">
              <br />
              <h3>Mígreni</h3>
              <p>A clean and streamlined migraine diary app</p>
            </Link>
          </div>
          </ReactCarousel>
        </Col>
      </Row>
    </div>
  );
};

export default Carousel;