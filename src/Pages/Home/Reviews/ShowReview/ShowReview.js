import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import './ShowReview.css'
const colors = {
  orange: "#FFBA5A",
};

const ShowReview = ({ review }) => {
  return (
    <Card  style={{ width: "250px",height: '200px' }}>
      <Card.Body>
        <Card.Title>{review.user}</Card.Title>
        <Card.Subtitle className="mb-4 ">
          {Array(review.rating)
            .fill()
            .map((_, i) => {
              return <FaStar color={colors.orange} />;
            })}
        </Card.Subtitle>
        <Card.Text>{review.message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShowReview;
