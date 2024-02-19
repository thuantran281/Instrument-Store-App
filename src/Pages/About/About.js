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
      <h3 className="text-center my-3 my-sm-3 my-md-4 my-lg-4 my-xl-4">About Us</h3>
      <div className="d-md-flex d-lg-flex d-xl-flex my-lg-3 mb-4 mb-sm-4 mb-md-4 mb-lg-4 mb-xl-4">
        <img src={MusicShop} alt="music store" className="image"/>
        <div className="description">
          Description of the music shop goes here...
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
