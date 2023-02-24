import { IMG_CDN_LINK } from "../Contents";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  maxDeliveryTime,
}) => {
  return (
    <div className="m-10 w-80 h-96  bg-white shadow-xl hover:scale-105 duration-500 cursor-pointer ">
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        className="w-80 h-52 mb-2"
      />
      <div className="p-3">
      <h1 className="text-xl text-sky-800 font-bold"> {name} </h1>
      <p className="my-2 text-sm">{cuisines.join(",")}</p>
      <p>
        {lastMileTravelString}, {maxDeliveryTime}min Delivery Time
      </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
