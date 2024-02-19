import React from "react";
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
          <div className="card" key={item.id} style={{ width: "17rem" }}>
            <div className="card-body">
              <img src={item.image} alt={item.name} className="card-img-top w-100" />
              <div className="card-text">
                <h4 className="my-xl-2">{item.name}</h4>
                <p>{item.brand}</p>
                <p>{item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guitar;
