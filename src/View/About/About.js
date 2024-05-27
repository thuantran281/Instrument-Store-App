import React from "react";
import Layouts from "../Layouts";
import "../About/About.css";
import MusicShop from "../../Assets/Images/rock-music-guitar-store-instrument-room-548067-pxhere.com.jpg";

const About = () => {
  return (
    <>
      <Layouts>
        <h3 className="text-center title my-3 my-sm-3 my-md-4 my-lg-4 my-xl-4">
          About Us
        </h3>
        <div className="d-md-flex d-lg-flex d-xl-flex my-lg-3 mb-4 mb-sm-4 mb-md-4 mb-lg-4 mb-xl-4">
          <img src={MusicShop} alt="music store" className="image" />
          <div className="description">
            Welcome to Kokkola Music Instruments, your premier destination for
            all things music in Kokkola, Finland. Nestled in the heart of this
            vibrant city, our store offers a wide range of high-quality musical
            instruments, accessories, and equipment to musicians of all skill
            levels. <br />
            <br />
            At Kokkola Music Instruments, we pride ourselves on providing an
            exceptional shopping experience. From guitars and keyboards to drums
            and brass instruments, we carry a diverse selection of top brands to
            ensure you find the perfect match for your musical aspirations.{" "}
            <br />
            <br />
            Have fun and enjoy your time with the shop! <br />
            <br />
            Kokkola Music Instrument Store
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default About;
