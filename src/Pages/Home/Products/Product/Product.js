import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, title, price, image } = product;
  return (
    <Col sx="12" md="6" lg="4">
      <Card
        style={{ width: "18rem", height: "380px" }}
        className="mx-auto product-card"
      >
        <Card.Img variant="top" src={image} className="img-fluid product-img" />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} Tk</Card.Text>
          <Link to={`/products/order/${_id}`}>
            <Button className="product-btn" variant="secondary">
              Order Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
