import { IMG_CDN_LINK } from "../Contents";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  maxDeliveryTime,
}) => {
  return (
    <div className="m-10 p-2 w-80 h-80 border-2 bg-slate-200">
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        className="w-80 h-44 hover:scale-105 duration-500 mb-2"
      />
      <h1 className="text-xl font-bold"> {name} </h1>
      <p className="my-2 text-sm">{cuisines.join(",")}</p>
      <p>
        {lastMileTravelString}, {maxDeliveryTime}
      </p>
    </div>
  );
};

export default RestaurantCard;
