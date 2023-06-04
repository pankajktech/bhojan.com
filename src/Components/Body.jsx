import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import useSearch from "../Utils/useSearch.js";
import { AiOutlineSearch } from "react-icons/ai";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const API_URL =
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(API_URL);
    const data = await response.json();
    setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    const data = useSearch(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }, [searchText, allRestaurants]);

  return (
    <>
      <div className="">
        <div className="flex justify-center shadow shadow-slate-100">
          <input
            type="text"
            name="search"
            value={searchText}
            placeholder="Search For Restaurant ..."
            className=" ring-1 ring-gray-500 focus:bg-gray-100 focus:outline-none px-6 h-12 focus:ring-black  w-[70%] lg:w-[35%] my-10 rounded-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 shadow-sm h-12 -m-6 lg:-mx-12 rounded-r-full w-10 my-10"
            onClick={() => {
              setSearchText("");
              setFilteredRestaurants(allRestaurants);
            }}
          >
            <AiOutlineSearch className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap gap-10 my-10 justify-center">
            {filteredRestaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.data?.id}
                  {...restaurant.data}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
