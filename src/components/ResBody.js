import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import EntitledSlide from "./EntitledSlide";

function ResBody() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [entitledData, setEntitledData] = useState([]);
  console.log({ entitledData });

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
    setEntitledData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
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
      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          data-testid="search-input"
          className="p-2 m-2 w-11/12 md:w-8/12 lg:w-6/12 border border-solid border-black rounded-md"
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

      {/* EntitledSlide Section */}
      <div className="w-11/12 mx-auto my-8">
        <EntitledSlide
          entitledData={entitledData}
          setEntitledData={setEntitledData}
        />
      </div>

      {/* Restaurant Cards */}
      <h2 className="text-2xl font-bold ms-20 p-5">
        Top restaurant chains in Lucknow
      </h2>
      <div className="flex flex-wrap gap-6 justify-center w-11/12 mx-auto">
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
