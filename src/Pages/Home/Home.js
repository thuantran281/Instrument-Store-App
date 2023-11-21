import React from "react";
import Header from "../../Components/Header";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import GuitarProduct from "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg";
import PianoProduct from "../../Assets/Images/Piano Products/pexels-photo-164743.jpeg";
import DrumProduct from "../../Assets/Images/Drum Products/px1566055-image-kwvxvjxm.jpg";
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

const DrumSliderUrl = [
  {
    url: DrumProduct,
  },
  {
    url: DrumProduct,
  },
  {
    url: DrumProduct,
  },
  {
    url: DrumProduct,
  },
  {
    url: DrumProduct,
  },
  {
    url: DrumProduct,
  },
]

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Carousels />
      <div className="my-3 my-sm-3 my-md-3 my-lg-4 my-xl-4"></div>
      <h1 className="product-title">Products</h1>
      <ScrollToTop />
      <div>
        <h3 className="
        mx-4 d-flex align-items-center
        mx-sm-4 d-sm-flex align-items-sm-center
        mx-md-4 d-md-flex align-items-md-center
        mx-lg-4 d-lg-flex align-items-lg-center
        mx-xl-4 d-xl-flex align-items-xl-center
        product-carousel-title"
        style={{ textDecoration: "underline" }}
        >
          <PiGuitarBold /> &nbsp; Guitar
        </h3>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
        >
          {GuitarSliderUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="guitar" />
              </div>
            );
          })}
        </Carousel>
        <h3 className="
        mx-4 d-flex align-items-center
        mx-sm-4 d-sm-flex align-items-sm-center
        mx-md-4 d-md-flex align-items-md-center
        mx-lg-4 d-lg-flex align-items-lg-center
        mx-xl-4 d-xl-flex align-items-xl-center product-carousel-title"
        style={{ textDecoration: "underline" }}>
          <CgPiano /> &nbsp; Piano
        </h3>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}
        >
          {PianoSliderUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="drum" />
              </div>
            );
          })}
        </Carousel>
        <h3 className="
        mx-4 d-flex align-items-center
        mx-sm-4 d-sm-flex align-items-sm-center
        mx-md-4 d-md-flex align-items-md-center
        mx-lg-4 d-lg-flex align-items-lg-center
        mx-xl-4 d-xl-flex align-items-xl-center product-carousel-title fst-italic"
        style={{ textDecoration: "underline" }}>
          <CgPiano /> &nbsp; Drum
        </h3>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          infinite={true}
          partialVisible={false}          
        >
          {DrumSliderUrl.map((imageUrl, index) => {
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
