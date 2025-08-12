import React, { useState } from "react";

function updatedProducts(_cartItems, _productId, _action = "+") {
  const updatedItems = _cartItems.map((item) => {
    if (_productId == item.product.id) {
      return {
        ...item,
        qty: _action === "+" ? item.qty + 1 : item.qty == 1 ? 1 : item.qty - 1,
      };
    } else {
      return item;
    }
  });
  return updatedItems;
}
function useCart() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    console.log(cartItems);

    const availableProduct = cartItems.find((item) => {
      return item.product.id == product.id;
    });

    console.log("this is availableProduct", availableProduct);

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

  function deleteItem(id) {}
  return { cartItems, handleAddToCart, addQty, minusQty, deleteItem };
}

export default useCart;
