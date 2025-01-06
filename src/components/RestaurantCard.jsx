import React from 'react';
import { CDN_URL } from '../utils/constants';


const RestaurantCard = ({ restaurant }) => {
  const cloudinaryBaseUrl = CDN_URL;
  const imageUrl = `${cloudinaryBaseUrl}/${restaurant.cloudinaryImageId}`;

  return (
    <div className="m-4 p-4 w-52 bg-slate-200 rounded-md items-center hover:bg-slate-400">
      <img className="rounded-lg" src={imageUrl} alt={restaurant.name} />
      <h3 className='font-bold py-2 text-lg'>{restaurant.name}</h3>
      <h4>Cuisines: {restaurant.cuisines.join(", ")}</h4>
      <h4>Rating: {restaurant.avgRating}</h4>
      <h4>Cost for Two: {restaurant.costForTwo}</h4>
      <h4>Delivery Area: {restaurant.areaName}</h4>
    </div>
  );
};
export const WithPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <><div>with promoted label</div><RestaurantCard {...props} /></>
    )
  }
}
export default RestaurantCard;
