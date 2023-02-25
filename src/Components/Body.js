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
      <div className="flex justify-center my-5">
        <input
          type="text"
          name="search"
          value={searchText}
          placeholder="Search For Food You Love..."
          className="ring-1 ring-slate-900 p-2  focus:outline-none focus:shadow-lg w-[30%] focus:ring-1 focus:ring-slate-900"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className=" bg-slate-900 text-white shadow-lg p-2 w-28 "
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
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
