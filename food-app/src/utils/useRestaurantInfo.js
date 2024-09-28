import { useState, useEffect } from "react";
import { MENU_API } from "./urls";
const useRestaurantInfo = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await (await fetch(MENU_API + resId)).json();
    setResMenu(data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
    setResInfo(data?.data?.cards[2].card.card.info);
  };

  return { resInfo, resMenu };
};

export default useRestaurantInfo;
