import React, { useContext } from "react";
import { CartContext } from "../../Context/Cart";
import Layouts from "../Layouts";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const { cartItems, removeFromCart, addToCart, getCartTotal } =
    useContext(CartContext) || {};

  const handleRemoveItem = (itemId, quantity) => {
    if (quantity > 1) {
      removeFromCart(itemId);
    } else {
      removeFromCart(itemId);
    }
  };

  const handleAddItem = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <Layouts>
        <div className="shopping-cart-content">
          <h2 className="text-center title my-xl-3">Shopping Cart</h2>
          {cartItems && cartItems.length > 0 ? (
            <div className="container my-xl-3">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item my-xl-3">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <div className="quantity-controls">
                      <button
                        className="quantity-button"
                        onClick={() => handleRemoveItem(item.id, item.quantity)}
                      >
                        -
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center my-xl-4">
                <p style={{ fontSize: "1.3rem" }}>
                  <b>Total:</b> ${getCartTotal().toFixed(2)}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center my-xl-4">
              <strong style={{ fontSize: "1.2rem" }}>
                :( Your cart is empty. Add something to your cart :)
              </strong>
            </div>
          )}
        </div>
      </Layouts>
    </div>
  );
};

export default ShoppingCart;
