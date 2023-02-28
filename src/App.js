import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutme from "./Components/About.js";
import Error from "./Components/Error.js";
import Contact from "./Components/Contact.js";
import Signin from "./Components/Signin.js";
import RestaurantInfo from "./Components/RestaurantInfo.js";

function SwiggyPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SwiggyPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Aboutme",
        element: <Aboutme />,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
