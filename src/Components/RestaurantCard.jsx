import { Link } from "react-router-dom";
import { IMG_CDN_LINK } from "../Contents";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
}) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div
        className="w-80 min-h-80 bg-slate-100 drop-shadow-md shadow-sm hover:shadow-lg duration-200 rounded-md
     "
      >
        <img
          src={IMG_CDN_LINK + cloudinaryImageId}
          className="w-80 h-44 mb-2"
          loading="lazy"
        />
        <div className="p-3">
          <h1 className="text-slate-950 font-bold "> {name} </h1>
          <p className="my-2 text-sm">{cuisines.join(", ")}</p>
          <div className="my-4">
            <span className="bg-green-600 ml-3 mr-6 px-2 text-sm text-white">
              {avgRating} ⭐
            </span>
            <span className="">{deliveryTime}min Delivery Time</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
