import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header";
import NavBar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Data from "../../../data/Data";

const Guitar = () => {
  const guitarProduct = Data.instruments.find(
    (item) => item.category === "Guitar"
  ).products;

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <h2 className="text-center my-xl-3">Guitar Products</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {guitarProduct.map((item) => (
            <Link to={`/products/guitar/${item.id}`} key={item.id} className="text-decoration-none">
              <div className="card" style={{ width: "17rem" }}>
                <div className="card-body">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top w-100"
                  />
                  <div className="card-text" style={{ textDecoration: "none" }}>
                    <h4 className="my-xl-2">{item.name}</h4>
                    <p>{item.brand}</p>
                    <p>{item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guitar;
