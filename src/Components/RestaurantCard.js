import { Link } from "react-router-dom";
import { IMG_CDN_LINK } from "../Contents";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  deliveryTime,
}) => {
  return (
    <Link to={`/restaurant/ + ${id}`}>
      <div
        className="w-80 h-96 bg-white shadow-xl drop-shadow-xl hover:-translate-y-3 duration-500
     "
      >
        <img
          src={IMG_CDN_LINK + cloudinaryImageId}
          className="w-80 h-52 mb-2"
        />
        <div className="p-3">
          <h1 className="text-sky-800 font-bold "> {name} </h1>
          <p className="my-2 text-sm ">{cuisines.join(",")}</p>
          <div className="my-4">
            <span className="bg-green-600 ml-3 mr-6 px-2 text-sm text-white">
              <AiOutlineStar className="inline-block mr-1" />
              {avgRating}
            </span>
            <span className="">{deliveryTime}min Delivery Time</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
