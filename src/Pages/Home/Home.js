import React from "react";
import Header from "../../Components/Header";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import GuitarProduct from "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg";
import PianoProduct from "../../Assets/Images/Piano Products/pexels-photo-164743.jpeg";
import DrumProduct from "../../Assets/Images/Drum Products/px1566055-image-kwvxvjxm.jpg";
import UkuleleProduct from "../../Assets/Images/Ukulele Products/pexels-photo-4215460.jpeg";
import OrganProduct from "../../Assets/Images/Organ Products/pexels-photo-164951.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CgPiano } from "react-icons/cg";
import { PiGuitarBold } from "react-icons/pi";
import { FaDrum } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
];

const PianoSliderUrl = [
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
];

const DrumSliderUrl = [
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
];

const OrganSliderUrl = [
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
];

const UkuleleSliderUrl = [
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
];

const slideUrlsMap = {
  Guitar: {
    slideUrls: GuitarSliderUrl,
    icon: <PiGuitarBold />,
  },
  Ukulele: {
    slideUrls: UkuleleSliderUrl,
    icon: <PiGuitarBold />,
  },
  Piano: {
    slideUrls: PianoSliderUrl,
    icon: <CgPiano />,
  },
  Organ: {
    slideUrls: OrganSliderUrl,
    icon: <CgPiano />, 
  },
  Drum: {
    slideUrls: DrumSliderUrl,
    icon: <FaDrum />,
  },
};

const ProductCarousel = ({ title, slideUrls, linkTo, icon }) => (
  <div>
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
  </div>
);

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Carousels />
      <div className="my-3 my-sm-3 my-md-3 my-lg-4 my-xl-4"></div>
      <h1 className="product-title">Products</h1>
      {Object.entries(slideUrlsMap).map(([category, { slideUrls, icon }]) => (
        <ProductCarousel
          key={category}
          title={category}
          slideUrls={slideUrls}
          icon={icon}
          linkTo={`/products/${category.toLowerCase()}`}
        />
      ))}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
