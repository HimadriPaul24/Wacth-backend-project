import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  


  

  useEffect(() => {
    fetch("https://obscure-peak-86560.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        
      });
  }, []);



  return (
    <Container className="mt-5">
      <Row className="gy-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
