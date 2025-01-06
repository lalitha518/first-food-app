import React, { useEffect, useCallback } from "react";
import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import { useAppContext } from "../myContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Home = () => {
  const { listOfRes, setListOfRes, originalList, setOriginalList } =
    useAppContext();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)
  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);

    const restaurants =
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    const restaurantData = restaurants.map((restaurant) => {
      return restaurant.info;
    });

    setListOfRes(restaurantData);
    setOriginalList(restaurantData);
  }, [setListOfRes, setOriginalList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false)
    return (
      <h1>Looks ike Something went wrong, Check your internet Connection!!</h1>
    );

  return listOfRes === null ? (
    <Shimmer />
  ) : (
    <div className="app">
      <div className="body">
        <div className="filter">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterData = originalList.filter((res) => {
                return res.avgRating > 4.2;
              });
              setListOfRes(filterData);
              console.log(filterData);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className=" px-4 py-2 m-4 rounded-lg">
          <label htmlFor="">User: </label>
          <input  className ="border border-black p-2"  type="text" />
        </div>
        <div className="flex flex-wrap">
          {listOfRes.map((restaurant) => (
            <Link
              className="res-card-link"
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
            >{
              restaurant?.data?.promoted? <RestaurantCardPromoted restaurant={restaurant}/>: <RestaurantCard restaurant={restaurant} />
            }
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
