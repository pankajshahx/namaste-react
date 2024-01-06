import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

function RestaurantCard({ restaurant }) {
    const { info } = restaurant;
    const { cloudinaryImageId, name, avgRating, cuisines, sla } = info;
    return (
        <div className='card-container'>
            <img className="res-card-image" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name.length > 25 ? `${name.slice(0, 25)}...` : name}</h3>
            <h3>{`${avgRating}* .${sla.deliveryTime} minutes`}</h3>
            <p>{cuisines.slice(0, 3).join(',')}</p>
        </div>
    )
}

export default RestaurantCard