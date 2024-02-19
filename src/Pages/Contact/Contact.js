import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="container my-3 my-sm-3 my-md-4 my-lg-4 my-xl-4">
        <h3 className="text-center">Contact Us</h3>
        <form action="" method="GET" className="my-xl-3">
          <div className="form-group mb-3">
            <label htmlFor="fname">First name</label>
            <div className="my-xl-2"></div>
            <input type="text" name="fname" id="fname" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lname">Last name</label>
            <div className="my-xl-2"></div>
            <input type="text" name="lname" id="lname" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="emailAddress">Email address</label>
            <div className="my-xl-2"></div>
            <input type="text" id="emailAddress" name="emailAddress" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="country">Country</label>
            <div className="my-xl-2"></div>
            <select
              name="country"
              id="country"
              aria-label="select country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Choose...</option>
              {countries.map((country, index) => (
                <option key={index} value={country.alpha2Code}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3 my-xl-4">
            <label htmlFor="subject">Subject</label>
            <div className="my-2 my-sm-2 my-md-2 my-lg-2 my-xl-2"></div>
            <textarea
              name="subject"
              id="subject"
              style={{ height: "200px" }}
            ></textarea>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
