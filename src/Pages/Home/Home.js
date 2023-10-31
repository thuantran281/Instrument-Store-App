import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";
import { Image } from "react-bootstrap";

const ProductSliderUrl = [
  {
    url: "",
  },
  {
    url: "",
  },
  {
    url: "",
  },
  {
    url: "",
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
        <h4>Guitar</h4>
      </div>
      <Footer />
    </>
  );
};

export default Home;
