import { useState, useEffect } from "react";

const useMenuCardAPI = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    FetchRestaurantsInfo();
  }, []);

  async function FetchRestaurantsInfo() {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useMenuCardAPI;
