import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import { API_URL } from '../utils/constants';

function ResBody() {

    const [restaurantsList, setRestaurantsList] = useState([])

    async function getRestaurants() {
        const data = await fetch(API_URL);
        const json = await data.json();
        setRestaurantsList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    useEffect(() => {
        getRestaurants();
    }, []);


    return (
        <div className='res-cards-container'>

            {restaurantsList.map((restaurant, index) => {
                return (
                    <div key={restaurant?.info?.id || index}>
                        <RestaurantCard restaurant={restaurant} />
                    </div>

                )
            })}
        </div>
    )
}

export default ResBody