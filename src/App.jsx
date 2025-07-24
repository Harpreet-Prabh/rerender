import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CompA from "./component/CompA";
import CompB from "./component/CompB";
import Products from "./component/Products";
import ThemeProvider from "./themeApp/ThemeProvider";
import Main from "./themeApp/Main";
function App() {
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
        <ThemeProvider>
          <Main></Main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
