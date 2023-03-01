import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../Contents";
import Shimmer from "./Shimmer.js";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    FetchRestaurantsInfo();
  }, []);

  async function FetchRestaurantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6139391&lng=77.2090212&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex lg:mx-52 my-10 lg:justify-between flex-col lg:flex-row">
      <div className=" mx-10 flex items-center flex-col mb-20 lg:mb-0">
        <div className="my-5">
          <h1 className="text-2xl ml-10 font-bold"> {restaurant.name} </h1>
          <h1 className="text-md ml-10 font-serif">
            {" "}
            {restaurant.cuisines.join(" , ")}{" "}
          </h1>
        </div>
        <img
          src={IMG_CDN_LINK + restaurant.cloudinaryImageId}
          className="h-[400px] w-[600px]"
        />
      </div>
      <div className="mx-10 boredr-l-2 border-l-slate-900 w-1/2]">
        <h1 className="text-2xl font-bold border-b-2 border-b-pink-600 text-center mb-5 w-10">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
        <div>{console.log(Object.values(restaurant.menu.items))}</div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
