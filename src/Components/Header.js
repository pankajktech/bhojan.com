import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [signedin, setSignedin] = useState(false);

  return (
    <>
      <div className="bg-slate-900 bg-opacity-80 text-slate-100 shadow-sm flex lg:justify-around items-center sticky top-0 z-10 p-3 backdrop-blur-md">
        <div className="flex flex-row justify-center items-center">
          <Link to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"
              className="h-12 w-12 mr-2"
            />
            </Link>
            {/* <h1 className=" text-md lg:text-lg max-md:hidden">Bhojan.com</h1> */}
  
        </div>

        <ul className="cursor-pointer flex ">
          <li className="mx-2 lg:mx-8 text-md hover:animate-pulse  hover:text-pink-400 font-bold duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 lg:mx-8 text-md hover:animate-pulse  hover:text-pink-400 font-bold duration-500">
            <Link to="/Aboutme">About Me</Link>
          </li>
          <li className="mx-2 lg:mx-8 text-md hover:animate-pulse  hover:text-pink-400 font-bold duration-500">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="mx-4 text-md  hover:animate-pulse  hover:text-pink-400 font-bold duration-500">
            {/* <i className="mx-1 fa-regular fa-user text-slate-900"></i> */}

            {signedin ? (
              <button onClick={() => setSignedin(false)}>Sign Out</button>
            ) : (
              <button onClick={() => setSignedin(true)}>
                <Link to="/Signin">Sign In </Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
