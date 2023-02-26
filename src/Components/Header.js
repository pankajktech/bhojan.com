import React from "react";
import { useState } from "react";

const Validation = () => {
  return (verified)
};

const Header = () => {
  const [signin, setSignin] = useState(false);
  return (
    <>
      <div className="bg-slate-900 bg-opacity-10 shadow-sm flex justify-between lg:justify-around items-center sticky top-0 z-10 p-3 backdrop-blur-md">
        <div className="flex flex-row justify-center items-center">
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
              className="h-12 w-12 mr-2"
            />
          </a>
          <h1 className=" text-md lg:text-lg">Bhojan.com</h1>
        </div>

        <ul className="cursor-pointer flex ">
          {/* <li className="p-5 hover:scale-105 text-lg hover:text-slate-700 duration-500">
            <i className="fa-solid fa-indian-rupee-sign text-slate-900 mr-2"></i>
            Offers
          </li>
          <li className="p-5 hover:scale-105 text-lg hover:text-slate-700 duration-500">
            <i className="fa-solid fa-circle-info text-slate-900 mr-2"></i>Help
          </li> */}
          <li className="mx-4 lg:mx-8 text-md  hover:text-slate-500 duration-500">
            <i className="mx-1 fa-solid fa-cart-plus text-slate-900"></i> Cart
          </li>

          <li className=" text-md  hover:text-slate-500 duration-500">
            <i className="mx-1 fa-regular fa-user text-slate-900"></i> Sign In
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
