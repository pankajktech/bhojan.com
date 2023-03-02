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
      <div className="bg-slate-800 text-white flex justify-center w-full mb-20">
        <img
          src={IMG_CDN_LINK + restaurant.cloudinaryImageId}
          className="h-[250px] w-[400px] p-5"
        />
        <div className="mt-10">
          <h1 className="text-3xl ml-10 mb-4 font-bold text-pink-600">
            {restaurant.name}
          </h1>
          <span className="text-sm ml-10 font-serif text-center bg-green-800 text-white p-2 w-20">
            <i className="fa-regular fa-star fa-sm mr-1"></i>{" "}
            {restaurant.avgRating}
          </span>
          <span className="text-md ml-10 font-serif text-center border-l-2 border-l-white px-4">
            {restaurant.cuisines.join(" , ")}
          </span>
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
            <div className=" border-b-2 border-b-slate-800 mb-4 flex justify-between" key={item?.id}>
              <div className="">
                <h3 className="text-xl font-bold">{item?.name}</h3>
                <p className="text-teal-600">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
                <p className="m-3 opacity-50">{item?.description}</p>
              </div>
              <div className="mb-5">
                {item?.cloudinaryImageId && (
                  <img
                    className="w-32 h-32"
                    src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                    alt={item?.name}
                  />
                )}
                <button className=" bg-green-800 w-32 text-white my-3"> Add to Cart </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
