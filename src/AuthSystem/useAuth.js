import React, { useState } from "react";

function useAuth() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogin(input) {
    setIsLogin(true);
    setUsername(input);
  }

  function handleLogout() {
    setIsLogin(false);
    setUsername("");
  }

  return {
    isLogin,
    username,
    handleLogin,
    handleLogout,
  };
}

export default useAuth;
