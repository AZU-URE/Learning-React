import { LOGO } from "../utils/urls";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const itemList = useSelector((store) => store.cart.items);
  const { name } = useContext(UserContext);
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO}></img>
      <div className="nav-list">
        <ul>
          <Link to={"/"} className="nav-link">
            <li>Home</li>
          </Link>
          <Link to={"/contact"} className="nav-link">
            <li>Contact Us</li>
          </Link>
          <Link to={"/about"} className="nav-link">
            <li>About Us</li>
          </Link>
          <Link to={"/grocery"} className="nav-link">
            <li>Grocery</li>
          </Link>

          <Link className="nav-link" to={"/cart"}>
            Cart ({itemList.length})
          </Link>
          <li className="nav-link">{name}</li>
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
