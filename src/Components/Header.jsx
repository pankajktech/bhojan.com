import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  const cartItemsDetails = () => {
    if (cartItems.length > 0) {
      navigate("/cart");
    }
  };

  return (
    <header className="bg-gray-100 sticky backdrop-blur-md bg-opacity-50 top-0 z-50">
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
          <div className="flex items-center gap-5">
            <div className="block shrink-0 relative rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:bg-slate-200 cursor-pointer">
              <AiOutlineShoppingCart
                className="h-6 w-6"
                onClick={() => cartItemsDetails()}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">
                {cartItems.length}
              </span>
            </div>

            <div className="block shrink-0 rounded-full bg-white p-2.5 cursor-pointer hover:bg-slate-200">
              <AiOutlineUser className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
