import { useState } from "react";
import { resList } from "../utils/constant";
import ResCard from "./ResCard";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
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
          <ResCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
