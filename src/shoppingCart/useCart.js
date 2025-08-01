import React, { useState } from "react";

function useCart() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems([...cartItems, { product, qty: 1 }]);
  }
  return { cartItems, handleAddToCart };
}

export default useCart;
