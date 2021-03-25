import React, { useContext } from 'react';
import './RestaurantList.css';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RestaurantItem from './RestaurantItem';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="restaurants">
      <h2 className="restaurantsListTitle">Liste de restaurants :</h2>
      <div className="restaurantsList">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
      </div>
    </div>
  );
}

export default RestaurantList;
