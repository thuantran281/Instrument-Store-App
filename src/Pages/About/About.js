import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../About/About.css";
import MusicShop from "../../Assets/Images/rock-music-guitar-store-instrument-room-548067-pxhere.com.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h3 className="text-center my-xl-4">About Us</h3>
      <div className="d-md-flex d-lg-flex d-xl-flex mb-xl-4">
        <img src={MusicShop} alt="music store" className="image"/>
        <div className="description">Our music shop...</div>
      </div>
      <Footer />
    </>
  );
};

export default About;
