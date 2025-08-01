import React from "react";
import CartContext from "./CartContext";
import useCart from "./useCart";
function CartProvider({ children }) {
  const cartData = useCart();
  console.log(cartData);

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
