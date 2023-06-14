import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../Contents";
import Shimmer from "./Shimmer.jsx";
import useMenuCardAPI from "../Utils/useMenuCardAPI.js";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useMenuCardAPI(resId);

  // Get The Restaurant Info From The API
  const ResInfo = restaurant?.cards[0]?.card?.card?.info;

  // Get The Restaurant's Menu From The API
  const itemCards =
    restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  // Add Item To The Cart
  const addFoodItem = (item) => {
    dispatch(addItem(item));
    toast("Item Added To Cart", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex items-center flex-col">
      <div className="bg-slate-800 text-white flex max-md:flex-col justify-center w-full mb-20">
        <img
          src={IMG_CDN_LINK + ResInfo?.cloudinaryImageId}
          className="h-[300px] w-[400px] p-5"
        />
        <div className="my-10 ">
          <h1 className="text-3xl ml-10 mb-4 font-bold text-slate-100">
            {ResInfo?.name}
          </h1>
          <span className="text-sm ml-10 font-serif text-center bg-slate-100 text-slate-900 p-2 w-20">
            {ResInfo?.avgRating} ⭐
          </span>
          <span className="text-md ml-2  font-serif text-center border-l-2 border-l-white px-2">
            {ResInfo?.totalRatingsString}
          </span>
          <p className="text-sm font-serif ml-10 my-5">
            {ResInfo?.cuisines.join(", ")}
          </p>
        </div>
      </div>
      <div className="mx-10 boredr-l-2 border-l-slate-900 lg:w-[40%]">
        <h1 className="text-2xl font-bold border-b-2 border-b-pink-600 text-center mb-2 w-10">
          Menu
        </h1>
        <p className="mb-10">
          {itemCards?.length > 0 ? "0" : itemCards?.length} Items
        </p>
        {
          <div className="flex flex-col">
            <ToastContainer />
            {itemCards?.map((item) => (
              <div
                key={item?.card?.info?.id}
                className=" border-b-2 border-b-slate-800 w-[90%] md:w-auto mb-4 flex flex-col-reverse md:flex-row md:justify-between"
              >
                <div className="w-[100%] lg:w-[60%]">
                  <h3 className="text-xl font-bold">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-teal-600">
                    {item?.card?.info?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.card?.info?.price / 100)
                      : " "}
                  </p>
                  <p className="my-3 opacity-50">
                    {item?.card?.info?.description}
                  </p>
                  <button
                    onClick={() => addFoodItem(item)}
                    className=" bg-gray-900 hover:bg-gray-800 w-36 flex items-center justify-center text-white my-5 py-2"
                  >
                    Add to Cart
                    <FaCartArrowDown className="ml-2" />
                  </button>
                </div>
                <div className="mb-5">
                  <img
                    className="h-[150px] w-[100%] md:w-[200px]  "
                    src={IMG_CDN_LINK + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                  />
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default RestaurantInfo;
