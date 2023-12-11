import React from "react";
// import guitarIcon from "../Assets/Images/guitar-logo.png";
import {
  BsTelephone,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsFillPinMapFill,
} from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About us
              </Link>
            </h3>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook style={{ fontSize: "20px" }} />
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram style={{ fontSize: "20px", color: "#e4405f" }} />
              </a>
              &nbsp;
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTiktok style={{ fontSize: "20px", color: "black" }} />
              </a>
            </div>
            <div className="my-xl-3">
              <a
                href="mailto: abc123@hotmail.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                <BsEnvelope />
                &nbsp; abc123@hotmail.com <br />
              </a>
              &nbsp;
              <a
                href="tel: +12345678901"
                style={{ textDecoration: "none", color: "black" }}
              >
                &nbsp;
                <BsTelephone /> +12345678901 <br />
              </a>
              <div>
                <BsFillPinMapFill />
                &nbsp; Vidnasinkatu 2, 67100 Kokkola
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <ul className="opening-hours-list">
              <li>
                <span>Monday:</span> 9:00 AM - 6:00 PM
              </li>
              <li>
                <span>Tuesday:</span> 9:00 AM - 6:00 PM
              </li>
              <li>
                <span>Wednesday:</span> 9:00 AM - 6:00 PM
              </li>
              {/* Add other days as needed */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Find us</h3>
            <p>Content for section 3 goes here.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
