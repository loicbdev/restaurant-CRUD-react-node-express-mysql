import React, { useContext } from 'react';
import './RestaurantList.css';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RestaurantItem from './RestaurantItem';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div>
      <h2 className="restaurantlist-title">Liste de restaurants :</h2>
      <div className="restaurantList">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
      </div>
    </div>
  );
}

export default RestaurantList;
