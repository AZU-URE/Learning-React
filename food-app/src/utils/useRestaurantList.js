import { useState, useEffect } from "react";
import { RES_LIST_API } from "./urls";
const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_LIST_API);
      const data = await response.json();
      setRestaurantList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  };

  return restaurantList;
};

export default useRestaurantList;
