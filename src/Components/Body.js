import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useSearch from "../Utils/useSearch.js";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-indigo-900">
        <div className="flex justify-center shadow shadow-slate-100">
          <input
            type="text"
            name="search"
            value={searchText}
            placeholder="Search For Restaurant ..."
            className="border border-gray-light focus:border px-6 h-12 focus:outline-none focus:shadow-lg w-[70%] lg:w-[35%] my-10 rounded-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-slate-900 text-white shadow-lg p-2 h-12 -m-6 lg:-mx-20 rounded-r-full w-20 my-10 hover:bg-slate-700 "
            onClick={() => {
              const data = useSearch(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            <i className="fa-solid fa-magnifying-glass fa-lg mr-2"></i>
          </button>
        </div>

        <div className="flex flex-wrap justify-center xl:mx-10 min-h-[75vh]">
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
