import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import { Link } from "react-router-dom";
import useSearch from "../Utils/useSearch.js";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
              const data = useSearch(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-10 my-10 justify-center">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={/restaurant/ + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
