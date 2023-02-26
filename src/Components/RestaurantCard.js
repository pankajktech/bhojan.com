import { IMG_CDN_LINK } from "../Contents";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
}) => {
  return (
    <div className="m-10 w-80 h-96  bg-white shadow-xl hover:scale-105 duration-500 cursor-pointer ">
      <img src={IMG_CDN_LINK + cloudinaryImageId} className="w-80 h-52 mb-2" />
      <div className="p-3">
        <h1 className="text-xl text-sky-800 font-bold"> {name} </h1>
        <p className="my-2 text-sm">{cuisines.join(",")}</p>
        <div className="my-4">
          <span className="bg-green-600 ml-3 mr-14 px-2 text-sm text-white">
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
