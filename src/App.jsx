import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CompA from "./component/CompA";
import CompB from "./component/CompB";
function App() {
  const [count, setCount] = useState(0);
  console.log("parent console");

  return (
    <>
      <div>
        <CompA name={"earth"} count={count}></CompA>
        <CompB name={"mars"}></CompB>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count {count}
        </button>
      </div>
    </>
  );
}

export default App;
