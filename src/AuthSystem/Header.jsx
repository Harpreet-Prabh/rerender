import React from "react";
import useAuthContext from "./useAuthContext";
function Header() {
  const { username, handleLogout, isLogin } = useAuthContext();
  return (
    <div className="border p-4 bg-fuchsia-200">
      <span>
        <h2>Welcome {username}</h2>
        {isLogin && <button onClick={() => handleLogout()}>Logout</button>}
      </span>
    </div>
  );
}

export default Header;
