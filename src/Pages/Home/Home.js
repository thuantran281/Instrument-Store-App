import React from "react";
import Header from "../../Components/Header";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import GuitarProduct from "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg";
import PianoProduct from "../../Assets/Images/Piano Products/pexels-photo-164743.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CgPiano } from "react-icons/cg";
import { PiGuitarBold } from "react-icons/pi";

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

const GuitarSliderUrl = [
  {
    url: GuitarProduct,
  },
  {
    url: GuitarProduct,
  },
  {
    url: GuitarProduct,
  },
  {
    url: GuitarProduct,
  },
  {
    url: GuitarProduct,
  },
  {
    url: GuitarProduct,
  },
];

const PianoSliderUrl = [
  {
    url: PianoProduct,
  },
  {
    url: PianoProduct,
  },
  {
    url: PianoProduct,
  },
  {
    url: PianoProduct,
  },
  {
    url: PianoProduct,
  },
  {
    url: PianoProduct,
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
        <h3 className="mx-xl-4 d-xl-flex align-items-xl-center product-carousel-title">
          <PiGuitarBold /> &nbsp; Guitar
        </h3>
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
          {GuitarSliderUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="guitar" />
              </div>
            );
          })}
        </Carousel>
        <h3 className="mx-xl-4 d-xl-flex align-items-xl-center product-carousel-title">
          <CgPiano /> &nbsp; Piano
        </h3>
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
          {PianoSliderUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="piano" />
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
