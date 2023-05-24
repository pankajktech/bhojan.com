import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-fuchsia-200 to-blue-300">
      <div className="flex flex-col justify-center items-center bg-slate-200 p-10 h-96">
        <h2 className="text-6xl my-6 font-bold">
          {error.status + " : " + error.statusText}
        </h2>
        <h1 className=" text-pink-700  text-5xl my-5">
          <i class="fa-regular fa-face-meh-blank fa-3xl mr-3"></i>Oops, There is
          Something Wrong
        </h1>
        <div className="flex">
          <Link
            to="/"
            className="text-xl bg-pink-500 p-2 w-24 text-center  text-white hover:animate-pulse font-bold m-3"
          >
            Home
          </Link>
          <Link
            to="/Contact"
            className="text-xl bg-teal-500 p-2 w-32 text-center  text-white hover:animate-pulse font-bold m-3"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
