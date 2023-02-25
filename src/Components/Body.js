import { useState } from "react";
import { RestaurantList } from "../Contents";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurants) =>(
    restaurants.data.name.toLowerCase().includes(searchText.toLowerCase())
  ));
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="flex items-center justify-center my-5">
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder="Search For Restaurant ..."
          className="ring-1 ring-slate-900 p-2  focus:outline-none focus:shadow-lg w-[20%] focus:ring-1 focus:ring-slate-900 rounded-sm"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className=" bg-slate-900 text-white shadow-lg p-2 ml-3 rounded-sm w-28 hover:bg-slate-700 "
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          <i class="fa-solid fa-magnifying-glass mr-2"></i>Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center xl:mx-10">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
