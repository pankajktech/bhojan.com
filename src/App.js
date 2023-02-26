import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutme from "./Components/About.js";
import Error from "./Components/Error.js";

function SwiggyPage() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SwiggyPage />,
    errorElement: <Error/>,
  },
  {
    path: "/Aboutme",
    element: <Aboutme />,
  },
  {
    path: "/Login",
    element: "<LoginPage/>",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);

