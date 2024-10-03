import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../styles/restaurantMenu.css";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantInfo(resId);
  const [show, setShow] = useState(-1);
  useEffect(() => {
    if (resMenu != null) {
      setShow(resMenu[2]?.card?.card?.title);
      // console.log(resMenu[2].card.card.title);
    }
  }, [resMenu]);
  if (resInfo === null && resMenu === null) {
    return <Shimmer />;
  }
  return (
    <div className="res-menu-container">
      <div className="res-menu">
        <div className="res-detail">
          <h2 className="res-name">{resInfo.name}</h2>
          <p className="res-rating">
            {resInfo.avgRating} ({resInfo.totalRatingsString})
          </p>
          <p className="res-price">{resInfo.costForTwoMessage}</p>
          <p className="res-cusines">{resInfo.labels[2].message}</p>
        </div>
        {resMenu.map((res, index) =>
          res.card.card["@type"].split(".").pop() === "ItemCategory" ? (
            <ItemList
              res={res}
              index={index}
              key={res.card.card.title}
              show={show}
              setShow={setShow}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
