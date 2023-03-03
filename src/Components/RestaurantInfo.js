import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../Contents";
import { ITEM_IMG_CDN_URL } from "../Contents";
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
    <div className="flex items-center flex-col">
      <div className="bg-slate-800 text-white flex max-md:flex-col justify-center w-full mb-20">
        <img
          src={IMG_CDN_LINK + restaurant.cloudinaryImageId}
          className="h-[300px] w-[400px] p-5"
        />
        <div className="my-10">
          <h1 className="text-3xl ml-10 mb-4 font-bold text-pink-600">
            {restaurant.name}
          </h1>
          <span className="text-sm ml-10 font-serif text-center bg-green-800 text-white p-2 w-20">
            <i className="fa-regular fa-star fa-sm mr-1"></i>{" "}
            {restaurant.avgRating}
          </span>
          <span className="text-md ml-10  font-serif text-center border-l-2 border-l-white px-4">
            {restaurant.cuisines.join(" , ")}
          </span>
          <p className="text-teal-600 ml-10 my-10">
            Cost For Two:
            <i className="fa-solid fa-indian-rupee-sign ml-3"></i>{" "}
            {restaurant?.costForTwo / 100}
          </p>
        </div>
      </div>
      <div className="mx-10 boredr-l-2 border-l-slate-900 lg:w-[40%]">
        <h1 className="text-2xl font-bold border-b-2 border-b-pink-600 text-center mb-2 w-10">
          Menu
        </h1>
        <p className="mb-10">
          {Object.keys(restaurant?.menu?.items).length} Items
        </p>

        <div className="flex flex-col">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div
              className=" border-b-2 border-b-slate-800 mb-4 flex justify-between"
              key={item?.id}
            >
              <div className="w-[65%] lg:w-[60%]">
                <h3 className="text-xl font-bold">{item?.name}</h3>
                <p className="text-teal-600">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
                <p className="my-3 opacity-50">{item?.description}</p>
                <button className=" bg-orange-900 hover:bg-orange-700 w-36 text-white my-5 py-2">
                  Add to Cart{" "}
                </button>
              </div>
              <div className="mb-5">
                <img
                  className="h-[150px] w-[200px]  "
                  src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                  alt={item?.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
