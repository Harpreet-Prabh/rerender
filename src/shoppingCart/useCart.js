import React, { useState } from "react";

function updatedProducts(_cartItems, _productId, _action = "+") {
  if (_action == "delete") {
    return _cartItems.filter((item) => item.product.id !== _productId);
  }

  return _cartItems.map((item) => {
    if (_productId == item.product.id) {
      return {
        ...item,
        qty: _action === "+" ? item.qty + 1 : item.qty == 1 ? 1 : item.qty - 1,
      };
    } else {
      return item;
    }
  });
}
function useCart() {
  let cartData = localStorage.getItem("cartItems");

  cartData = cartData ? JSON.parse(cartData) : [];
  const [cartItems, setCartItems] = useState(cartData);

  function handleAddToCart(product) {
    const availableProduct = cartItems.find((item) => {
      return item.product.id == product.id;
    });

    if (availableProduct) {
      const updatedItems = updatedProducts(cartItems, product.id, "+");
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { product, qty: 1 }]);
    }
  }

  function addQty(id) {
    const updatedItems = updatedProducts(cartItems, id, "+");
    setCartItems(updatedItems);
  }

  function minusQty(id) {
    const updatedItems = updatedProducts(cartItems, id, "-");
    setCartItems(updatedItems);
  }

  function deleteItem(id) {
    const updatedItems = updatedProducts(cartItems, id, "delete");
    setCartItems(updatedItems);
  }
  return { cartItems, handleAddToCart, addQty, minusQty, deleteItem };
}

export default useCart;
