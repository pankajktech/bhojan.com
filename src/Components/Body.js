import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
// import notFound from "./notFound.js";

function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(API_URL);
    const data = await response.json();
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }

  // if(!allRestaurants ===0) return null;
  // if(filteredRestaurants.length===0) return notFound();

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center justify-center my-5">
        <input
          type="text"
          name="search"
          value={searchText}
          autoFocus
          placeholder="Search For Restaurant ..."
          className="border border-gray-light focus:border-2 focus:border-slate-800 px-6 h-12 focus:outline-none focus:shadow-lg w-[70%] lg:w-[45%] rounded-full"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className=" bg-slate-900 text-white shadow-lg p-2 h-12 -m-6 lg:-m-18 rounded-r-full w-20 hover:bg-slate-700 "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i>
        </button>
      </div>

      <div className="flex flex-wrap justify-center xl:mx-10 min-h-[75vh]">
        {filteredRestaurants.map((restaurant) => {
          return (
          <Link to={/restaurant/ + restaurant.data.id}>  <RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
