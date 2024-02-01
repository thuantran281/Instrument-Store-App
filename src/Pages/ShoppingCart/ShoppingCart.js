import React, { useState } from 'react';
import Header from "../../Components/Header";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Data from "../../Data";

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Header />
      <NavBar />
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <hr />
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>
        {cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <hr />
          </div>
        ))}
      </div>

      <div>
        <h2>Total: ${calculateTotal()}</h2>
        <button>Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
