import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagories from "./RestaurantCatagories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo } = useRestaurantMenu(resId) || {
    resInfo: null,
  };
  console.log("resInfo:", resInfo);

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  console.log(
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
  );

  const catagories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (catgory) =>
        catgory?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log("catagories", catagories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">
        {resInfo?.cards?.[2]?.card?.card?.info?.name || "No Name Available"}
      </h2>
      <p className="font-bold text-lg">
        {resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(", ")}-{" "}
        {resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      {catagories.length > 0 &&
        catagories.map((cat, index) => (
          <RestaurantCatagories key={cat.card.card.title} data={cat.card.card} />
        ))}
    </div>
  );
};

export default RestaurantMenu;
