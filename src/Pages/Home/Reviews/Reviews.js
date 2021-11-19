import React, { useEffect, useState } from "react";
import './Reviews.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ShowReview from "./ShowReview/ShowReview";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://obscure-peak-86560.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className=" my-5 review-bg pb-5">
      <h2 className="my-5 text-info">Client Say About Us</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        onSlideChange={() => console.log("")}
        onSwiper={(swiper) => console.log('')}
      >
  
        {reviews.map((review) => (
          <SwiperSlide className='reviews-slide'>
            <ShowReview key={review._id} review={review}></ShowReview>
          </SwiperSlide>
        ))}
      </Swiper>
  
    </div>
  );
};

export default Reviews;
