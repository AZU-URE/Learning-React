import { LOGO } from "../utils/urls";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO}></img>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
