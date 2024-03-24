import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../../data/Data";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import NavBar from "../../../Components/Navbar";
import "./ProductDetail.css"; // Import CSS file for styling

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        for (const category of Data.instruments) {
          const thisProduct = category.products.find(
            (p) => p.id === parseInt(productId)
          );

          if (thisProduct) {
            setProduct(thisProduct);
            break;
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="container d-flex align-items-center justify-content-center">
        {product ? (
          <div className="product-detail-card">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
              <h2>{product.name}</h2>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Description: {product.description}</p>
              <div className="quantity-control">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ) : (
          <h4>Product Not Found!</h4>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
