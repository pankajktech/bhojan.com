import { RestaurantList } from "../Contents";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {RestaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    );
  };

    export default Body;