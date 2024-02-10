import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function ResBody() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestaurants() {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if ((restaurantsList || []).length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="pt-20">
      <div className="flex justify-center pt-4">
        <input
          data-testid="search-input"
          className="p-2 m-2 w-6/12 border border-solid border-black rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filterRes = restaurantsList.filter((res) =>
              res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredRestaurant(filterRes);
          }}
          placeholder="Search for food ..."
        />
      </div>
      <div className="flex flex-wrap m-auto w-11/12 pl-12">
        {filteredRestaurant.map((restaurant, index) => {
          return (
            <Link
              key={restaurant?.info?.id || index}
              to={"/restaurant/" + restaurant.info.id}
            >
              <div>
                <RestaurantCard restaurant={restaurant} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ResBody;
