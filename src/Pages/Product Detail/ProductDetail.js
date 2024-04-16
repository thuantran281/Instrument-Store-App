import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import Button from "react-bootstrap/Button";
import "./ProductDetail.css";
import Data from "../../data/Data";
import ModalBox from "../../Components/ModalBox";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = () => {
    const item = { ...product, quantity };
    addToCart(item);
    setShowModal(true);
  };

  const totalPrice = product ? product.price * quantity : 0;

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
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
              <Button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        ) : (
          <h4>Product Not Found!</h4>
        )}
      </div>
      <Footer />
      <ModalBox
        message="Product has been added to the cart!"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ProductDetail;
