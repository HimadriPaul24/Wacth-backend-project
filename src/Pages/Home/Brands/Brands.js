import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Brands.css'
const Brands = () => {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="last-brand" md="4" lg="1">
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/rolex.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/patek-philippe.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/cartier.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/grand-seiko.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/tudor.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/omega.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/breitling-logo-jan20.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/tag-heuer.png"
              alt=""
            />
          </Col>
          <Col className="last-brand">
            <img
              src="https://content.thewosgroup.com/wosus/homepage/brand-logos/hp-brand-hublot-logo-feb21.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    );
};

export default Brands;