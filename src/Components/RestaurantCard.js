import { IMG_CDN_LINK } from "../Contents";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
}) => {
  return (
    <div className="m-8 w-80 h-96 rounded-md overflow-clip bg-white shadow-xl hover:-translate-y-3 duration-500
     bg-gradient-to-r from-slate-50 to-indigo-200">
      <img src={IMG_CDN_LINK + cloudinaryImageId} className="w-80 h-52 mb-2" />
      <div className="p-3">
        <h1 className="text-xl text-sky-800 font-bold "> {name} </h1>
        <p className="my-2 text-sm ">{cuisines.join(",")}</p>
        <div className="my-4">
          <span className="bg-green-600 ml-3 mr-6 px-2 text-sm text-white">
            <i className="fa-regular fa-star text-white fa-sm mr-1"></i>
            {avgRating}
          </span>
          <span className="">{deliveryTime}min Delivery Time</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
