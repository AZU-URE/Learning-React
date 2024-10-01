import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import ResCard, { addOffer } from "./ResCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import { UserContext } from "../utils/userContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const { setName, name } = useContext(UserContext);
  const OfferResCard = addOffer(ResCard);
  useEffect(() => {
    search();
  }, [searchText]);

  const list = useRestaurantList();
  // console.log(list);

  useEffect(() => {
    setRestaurantList(list);
  }, [list]);
  const search = () => {
    const filteredList = list.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setRestaurantList(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline</h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <p>Search</p>
          <input
            id="search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          ></input>
        </div>
        <button
          onClick={() => {
            const filtereArr = restaurantList.filter(
              (el) => el.info.avgRating > 4.5
            );
            setRestaurantList(filtereArr);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            id="yourName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user Name"
          ></input>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res?.info?.aggregatedDiscountInfoV3 !== undefined ? (
              <OfferResCard resData={res} />
            ) : (
              <ResCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
