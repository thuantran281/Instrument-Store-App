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
      <h3 className="text-center my-xl-3">About Us</h3>
      <div className="d-xl-flex">
        <div>
          <img src={MusicShop} alt="music store" width={510} height={350}/>
        </div>
        <div>Our music shop...</div>
      </div>
      <Footer />
    </>
  );
};

export default About;
