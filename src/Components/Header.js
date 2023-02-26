import React from "react";
import { useState } from "react";

const authenticateUser = () => {
  return false;
};

const Header = () => {
  const [signedin, setSignedin] = useState(false);
  return (
    <>
      <div className="bg-slate-900 bg-opacity-10 shadow-sm flex justify-evenly lg:justify-around items-center sticky top-0 z-10 p-3 backdrop-blur-md">
        <div className="flex flex-row justify-center items-center">
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
              className="h-12 w-12 mr-2"
            />
          </a>
          <h1 className=" text-md lg:text-lg max-md:hidden">Bhojan.com</h1>
        </div>

        <ul className="cursor-pointer flex ">
         
          <li className="mx-2 lg:mx-8 text-md  hover:text-slate-500 duration-500">
            <a href="/Aboutme">About Me</a> 
          </li>
          <li className="mx-4 lg:mx-8 text-md  hover:text-slate-500 duration-500">
            <i className="mx-1 fa-solid fa-cart-plus text-slate-900"></i> Cart
          </li>

          <li className=" text-md  hover:text-slate-500 duration-500">
            <i className="mx-1 fa-regular fa-user text-slate-900"></i>
            {signedin ? (
              <button onClick={() => setSignedin(false)}>Sign Out</button>
            ) : (
              <button onClick={() => setSignedin(true)}>Sign In</button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
