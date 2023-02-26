import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <>
      <div>
        <h1>
          Oops, There
          is Something Wrong
        </h1>
      </div>
      <div>{error}</div>
    </>
  );
};

export default Error;
