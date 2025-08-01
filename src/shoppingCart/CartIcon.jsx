import React from "react";
import { ShoppingCart } from "lucide-react";
import useCartContext from "./useCartContext";
function CartIcon() {
  const { cartItems } = useCartContext();
  return (
    <div className="relative ">
      <p className="absolute bg-red-400 text-white">{cartItems.length}</p>
      <ShoppingCart className= "" />
    </div>
  );
}

export default CartIcon;
