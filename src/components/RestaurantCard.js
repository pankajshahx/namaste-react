import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function RestaurantCard({ restaurant }) {
  const { info } = restaurant;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    aggregatedDiscountInfoV3,
  } = info;
  return (
    <div className="m-2 p-2 transform hover:scale-95 transition-transform duration-300">
      <div className="relative">
        <img
          className="w-72 rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h1 className="absolute text-white text-2xl font-extrabold w-72 px-2 shadow-2xl bottom-0">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </h1>
      </div>

      <h3 className="text-lg font-bold py-2">
        {name.length > 25 ? `${name.slice(0, 25)}...` : name}
      </h3>
      <h3 className="font-bold">{`${avgRating || "New"}* .${
        sla.deliveryTime
      } minutes`}</h3>
      <p>{cuisines.slice(0, 3).join(", ")}</p>
    </div>
  );
}

export default RestaurantCard;
