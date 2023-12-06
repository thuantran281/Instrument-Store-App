import React from "react";
import guitarIcon from "../Assets/Images/guitar-logo.png";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About us</h3>
            <p>Content for section 1 goes here.</p>
          </div>
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p>Content for section 2 goes here.</p>
          </div>
          <div className="footer-section">
            <h3>Section 3</h3>
            <p>Content for section 3 goes here.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
