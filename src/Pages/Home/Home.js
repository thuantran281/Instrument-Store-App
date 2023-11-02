import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductSliderUrl = [
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
  {
    url: "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Carousels />
      <div className="my-xl-4"></div>
      <h1 className="product-title">Products</h1>
      <ScrollToTop />
      <div className="parent">
        <Carousel
          responsive={Responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {ProductSliderUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="guitar" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Home;
