import { useState, useEffect } from "react";
import { resList } from "../utils/constant";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import { RES_LIST_API } from "../utils/urls";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    search();
  }, [searchText]);

  const list = useRestaurantList();
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
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
