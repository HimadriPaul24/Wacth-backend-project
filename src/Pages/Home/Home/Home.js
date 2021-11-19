import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Product from '../Products/Product/Product';
import Reviews from '../Reviews/Reviews';
import VideoBanner from '../VideoBanner/VideoBanner';

const Home = () => {
    const [products, setProducts] = useState([]);

     useEffect(() => {
       fetch("https://obscure-peak-86560.herokuapp.com/products")
         .then((res) => res.json())
         .then((data) => {
           setProducts(data);
         });
     }, []);
    
    return (
      <div>
        <Banner></Banner>
        <Brands></Brands>
        <VideoBanner></VideoBanner>
        <h2 className="my-5">Now Avaiable To Buy Online</h2>
        <Container className="mt-5">
          <Row className="gy-4">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;