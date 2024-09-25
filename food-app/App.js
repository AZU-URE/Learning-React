import React from "react";
import ReactDom from "react-dom/client";
import { resList } from "./constant";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://media.istockphoto.com/id/1693744177/vector/letter-u-food-logo-design-bakery-vector-logo-concept-letter-u-restaurant-food-logo-design.jpg?s=2048x2048&w=is&k=20&c=b73EO2kC8q8AfzKCnVlCx4KXoKjQc-RRsLRWNej5-KU="
      ></img>
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
const ResCard = (props) => {
  console.log(props);

  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="res-img"
        ></img>
      </div>
      <h3>
        {name.substring(0, 17)}
        {name.length > 17 ? "..." : ""}
      </h3>
      <h4>
        {cuisines.join(", ").substring(0, 20)}
        {cuisines.join(", ").length > 20 ? ".." : ""}
      </h4>
      <p>{avgRating}/5</p>
      <p>{costForTwo}</p>
      <p>{sla.deliveryTime} mins</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <ResCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
