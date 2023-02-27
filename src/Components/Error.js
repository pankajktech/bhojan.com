import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <h1 className=" text-5xl"><i class="fa-regular fa-face-meh-blank fa-3xl mr-3"></i>Oops, There is Something Wrong</h1>
      <h2 className="text-2xl my-3">{error.status + " : " + error.statusText}</h2>
      <a href="/" className="text-2xl text-blue-500 hover:text-blue-700">Go Back</a>
      </div>
    </>
  );
};

export default Error;
