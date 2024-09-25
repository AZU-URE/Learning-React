import { LOGO } from "../utils/urls";
import { useState } from "react";
import React from "react";
const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO}></img>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              login === "Login" ? setLogin("LogOut") : setLogin("Login")
            }
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
