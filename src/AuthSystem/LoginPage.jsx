import React, { useState } from "react";
import useAuthContext from "./useAuthContext";

function LoginPage() {
  const [input, setInput] = useState("");
  const { handleLogin } = useAuthContext();
  console.log(input);

  return (
    <div className="bg-amber-200 border p-4 ">
      <input
        className="bg-white p-2"
        type="text"
        placeholder="enter your name here"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          handleLogin(input);
          setInput("");
        }}
      >
        LogIn
      </button>
    </div>
  );
}

export default LoginPage;
