import CartContext from "./CartContext";
import { useContext } from "react";

function useCartContext() {
  return useContext(CartContext);
}

export default useCartContext;
