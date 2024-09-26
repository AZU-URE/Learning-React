import { useState, useEffect } from "react";
import { resList } from "../utils/constant";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import { RES_LIST_API } from "../utils/urls";
import { Link } from "react-router-dom";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(RES_LIST_API);
      const data = await response.json();
      // setRestaurantList(data);
      setRestaurantList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    search();
  }, [searchText]);

  const search = () => {
    const filteredList = list.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setRestaurantList(filteredList);
  };

  if (loading) {
  }

  return loading ? (
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
