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
      <div className="container">
        <form action="" method="GET">
          <div className="form-group mb-3">
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lname">Last name</label>
            <input type="text" name="lname" id="lname" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="emailAddress">Email address: </label>
            <input type="text" id="emailAddress" name="emailAddress" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="country">Country</label>
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
          <div className="form-group mb-3">
            <label htmlFor="subject">Subject</label>
            <textarea
              name="subject"
              id="subject"
              style={{ height: "200px " }}
            ></textarea>
          </div>
          <button type="submit" className="text-center">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
