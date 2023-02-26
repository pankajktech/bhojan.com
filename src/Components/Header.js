import React from "react";
import { useState } from "react";

const Header = () => {

  return (
    <>
      <div className="bg-slate-900 bg-opacity-10 shadow-sm flex justify-around items-center font-bold sticky top-0 z-10 p-3 backdrop-blur-md">
        <div className="flex flex-row justify-center items-center">
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
              className="h-12 w-12 mr-2"
            />
          </a>
          <h1 className="text-lg">Bhojan.com</h1>
        </div>

        <ul className="flex flex-col lg:flex-row absolute lg:relative justify-center h-72 lg:h-auto items-center cursor-pointer ">
          {/* <li className="p-5 hover:scale-105 text-lg hover:text-teal-800 duration-500">
            <i className="fa-solid fa-indian-rupee-sign text-slate-900 mr-2"></i>
            Offers
          </li>
          <li className="p-5 hover:scale-105 text-lg hover:text-teal-800 duration-500">
            <i className="fa-solid fa-circle-info text-slate-900 mr-2"></i>Help
          </li> */}
          <li className="mx-6 hover:scale-105 text-2xl hover:text-teal-800 duration-500">
            <i className="fa-solid fa-cart-plus text-slate-900"></i>
          </li>
          <li className="hover:scale-105 text-2xl hover:text-teal-800 duration-500">
            <i className="mx-6 fa-regular fa-user text-slate-900"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
