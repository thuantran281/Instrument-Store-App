import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel1 from "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg";

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

const ProductSliderUrl = [
  {
    url: Carousel1,
  },
  {
    url: Carousel1,
  },
  {
    url: Carousel1,
  },
  {
    url: Carousel1,
  },
  {
    url: Carousel1,
  },
  {
    url: Carousel1,
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
      <div>
        <h3 className="mx-xl-4">Guitar</h3>
        <Carousel
          responsive={responsive}
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
