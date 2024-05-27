import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const ProductCarousel = ({ title, slideUrls, linkTo, icon }) => (
  <>
    <h3
      className="mx-4 d-flex align-items-center product-carousel-title"
      style={{ textDecoration: "underline" }}
    >
      <span style={{ marginRight: "8px" }}>{icon}</span>
      <Link to={linkTo} style={{ color: "black", textDecoration: "none" }}>
        {title}
      </Link>
    </h3>
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={true}
      infinite={true}
      partialVisible={false}
    >
      {slideUrls.map((imageUrl, index) => (
        <Link to={linkTo} key={index}>
          <div className="slider">
            <img src={imageUrl.url} alt={title} />
          </div>
        </Link>
      ))}
    </Carousel>
  </>
);

export default ProductCarousel;
