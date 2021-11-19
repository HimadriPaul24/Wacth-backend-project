import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="img-size">
        <img
          className="d-block w-100 "
          src="https://i.ibb.co/pbR7X4M/slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/products">
            <Button className="banner-btn" variant="outline-secondary">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/hF8j57N/slider02.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://i.ibb.co/m50FJGM/slider03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button className="banner-btn" variant="outline-secondary">
            Explore Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
