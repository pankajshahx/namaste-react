import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
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
    <div
      data-testid="res-card"
      className="p-4 transform hover:scale-95 transition-transform duration-300"
    >
      <div className="relative">
        <img
          className=" w-72 rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h1 className="absolute text-white text-2xl font-extrabold w-72 px-2 bottom-0 rounded-b-lg bg-gradient-to-t from-gray-950">
          {(aggregatedDiscountInfoV3?.header || "") +
            " " +
            (aggregatedDiscountInfoV3?.subHeader || "")}
        </h1>
      </div>
      <div className="">
        <p className="text-lg font-bold">
          {name.length > 25 ? `${name.slice(0, 25)}...` : name}
        </p>
        <div className="flex items-center">
          <StarsIcon className="me-1" fontSize="small" color="success" />
          <div className="flex items-center font-bold">
            <p className="me-1">{`${avgRating || "New"}`}</p>
            <p className="pb-2 me-1 font-bold text-lg">.</p>
            <p>{`${sla?.deliveryTime || 0} minutes`}</p>
          </div>
        </div>
        <p>{cuisines.slice(0, 3).join(", ")}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
