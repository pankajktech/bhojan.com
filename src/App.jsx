import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Body from "./Components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error.jsx";
import RestaurantInfo from "./Components/RestaurantInfo.jsx";
import { Provider } from "react-redux";
import cart from "./Redux/store.js";
import CartItems from "./Components/CartItems.jsx";

const SwiggyPage = () => {
  return (
    <Provider store={cart}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

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
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
