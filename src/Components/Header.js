import React from "react";
import { Link } from "react-router-dom";
import useSearchResult from "../Utils/useSearch";

import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
const Header = () => {
  const [searchText, setSearchText] = React.useState("");
  const [allRestaurants, setAllRestaurants] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);

  React.useEffect(() => {
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

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const data = useSearchResult(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  return (
    <header className="bg-gray-100 sticky backdrop-blur-md top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-row justify-center items-center">
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
                className="h-12 w-12 mr-2"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineSearch className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <input
                  className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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

              <div className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                <AiOutlineShoppingCart />
              </div>
            </div>

            <div className="block shrink-0 rounded-full bg-white p-2.5">
              <span className="sr-only">Profile</span>
              <AiOutlineUser className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
