import { RES_IMG_URL } from "../utils/urls";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "../styles/restaurantMenu.css";
import useRestaurantInfo from "../utils/useRestaurantInfo";

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
        {/* <div className="food-type">
  <div className="veg"></div>
  <div className="non-veg"></div>
  </div> */}
        {resMenu.map((res, index) =>
          res.card.card["@type"].split(".").pop() === "ItemCategory" ? (
            <ItemContainer
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

function ItemContainer(props) {
  const { res, index, show, setShow } = props;
  const item = res.card.card;
  // console.log(item);

  useEffect(() => {
    if (index === 2) {
      setShow(true);
    }
  }, []);
  return (
    <div>
      <div className="type-container">
        <h3 className="item-type">
          {item.title} ({item.itemCards.length})
        </h3>
        <button
          onClick={() => {
            show === item.title ? setShow(-1) : setShow(item.title);
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show === res.card.card.title ? (
        <div className="items-container">
          {item.itemCards.map((item) => (
            <ItemCard info={item} key={item.card.info.id}></ItemCard>
          ))}
        </div>
      ) : (
        <div className="not-show"></div>
      )}
    </div>
  );
}

function ItemCard(props) {
  const { info } = props;
  const { name, description, imageId, price, defaultPrice } = info.card.info;
  return (
    <div className="item">
      <div className="item-detail">
        <h4 className="item-name">{name}</h4>
        <p className="item-price">₹{price / 100 || defaultPrice / 100}</p>
        <p className="item-desc">{description}</p>
      </div>
      <div className="item-img">
        <img src={RES_IMG_URL + imageId}></img>
      </div>
    </div>
  );
}

export default RestaurantMenu;
