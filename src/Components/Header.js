import React from "react";
import { useState } from "react";

const Header = () => {
  //Why we need state veriables?
  // const []
  
  return (
    <div className=" bg-slate-100 flex justify-around items-center font-bold">
      <div className="flex justify-center items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
          className="h-12 w-12 mr-2"
        />
        <h1>Bhojan.com</h1>
      </div>
      

      <ul className="flex flex-col lg:flex-row absolute lg:relative justify-center h-72 lg:h-auto items-center cursor-pointer ">
        <li className="p-5">Offers</li>
        <li className="p-5">Help</li>
        <li className="p-5">SignIn</li>
        <li className="p-5">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
