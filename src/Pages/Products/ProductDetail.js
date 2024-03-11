import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/Data";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";

const ProducDetail = () => {
  const { productId } = useParams();

  for (const category of Data.instruments) {
    const thisProduct = category.products.find(
      (product) => product.id === parseInt(productId)
    );

    if (thisProduct) {
      return (
        <>
          <Header />
          <NavBar />
          <h2>{thisProduct.name}</h2>
          <p>{thisProduct.brand}</p>
          <p>{thisProduct.price.toFixed(2)}</p>
          <p>{thisProduct.description}</p>
          <img src={thisProduct.image} alt={thisProduct.name} />
          <Footer />
        </>
      );
    }
  }

  return (
    <>
      <h4>Product Not Found!</h4>
    </>
  );
};

export default ProducDetail;
