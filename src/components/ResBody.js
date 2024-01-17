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
    console.log(json);
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

  if (
    (restaurantsList || []).length === 0 ||
    (filteredRestaurant || []).length === 0
  ) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filterRes = restaurantsList.filter((res) =>
              res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredRestaurant(filterRes);
          }}
          placeholder="search..."
        />
      </div>
      <div className="res-cards-container">
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
    </>
  );
}

export default ResBody;
