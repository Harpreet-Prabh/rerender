import { useState, useEffect } from "react";

import CompA from "./component/CompA";
import CompB from "./component/CompB";
import Products from "./component/Products";
import ThemeProvider from "./themeApp/ThemeProvider";
import Main from "./themeApp/Main";
import AppAuth from "./AuthSystem/AppAuth";
import AuthProvider from "./AuthSystem/AuthProvider";
import ProductList from "./shoppingCart/ProductList";
import CartProvider from "./shoppingCart/CartProvider";
import CartIcon from "./shoppingCart/CartIcon";
import CartSummary from "./shoppingCart/CartSummary";
function App() {
  const [toggleCart, setToggleCart] = useState(false);
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // console.log("parent console");

  // useEffect(() => {
  //   console.log("Intial load ");
  // }, []);

  // useEffect(() => {
  //   console.log("load when needed", count);
  // }, [count]);

  // useEffect(() => {
  //   console.log("load everytime ", name);
  // });

  return (
    <>
      <div>
        {/* <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count {count}
        </button>
        <CompA name={"earth"} count={count}></CompA>
        <CompB name={name}></CompB> */}

        {/* <Products /> */}
        {/* <ThemeProvider>
          <Main></Main>
        </ThemeProvider> */}
        {/* <AuthProvider>
          <AppAuth />
        </AuthProvider> */}
        <CartProvider>
          <div
            onClick={() => {
              setToggleCart((previousValue) => !previousValue);
            }}
          >
            <CartIcon />
          </div>

          {toggleCart && <CartSummary />}

          <ProductList></ProductList>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
