import React, { useState } from "react";

function useCart() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    console.log(cartItems);

    const availableProduct = cartItems.find((item) => {
      return item.product.id == product.id;
    });

    console.log("this is availableProduct", availableProduct);

    if (availableProduct) {
      const updatedItems = cartItems.map((item) => {
        if (product.id == item.product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { product, qty: 1 }]);
    }
  }
  return { cartItems, handleAddToCart };
}

export default useCart;
