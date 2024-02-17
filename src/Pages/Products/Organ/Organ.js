import React from "react";
import Header from "../../../Components/Header";
import NavBar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Data from "../../../data/Data";

const Organ = () => {

  const organProduct = Data.instruments.find(
    (item) => item.category === "Organ"
  ).products;

  return (
    <>
      <Header />
      <NavBar />
      <div className="organ-page-container">
        <h2 className="text-center my-xl-3">Organ Products</h2>
        {organProduct.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-body">
              <h2>{item.name}</h2>
              <p>{item.brand}</p>
              <p>{item.price.toFixed(2)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Organ;
