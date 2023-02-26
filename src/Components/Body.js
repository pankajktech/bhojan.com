import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING";
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
          className="ring-1 ring-slate-700 p-2 h-12 focus:outline-none focus:shadow-lg w-[45%] focus:ring-1 focus:ring-slate-900 rounded-sm"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className=" bg-slate-900 text-white shadow-lg p-2 h-12 rounded-sm w-28 hover:bg-slate-700 "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i>Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center xl:mx-10 min-h-[75vh]">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
