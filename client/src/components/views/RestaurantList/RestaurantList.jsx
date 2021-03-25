import React, { useContext } from 'react';
import './RestaurantList.css';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RestaurantItem from './RestaurantItem';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="restaurantList">
      <h2>Restaurant list :</h2>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
