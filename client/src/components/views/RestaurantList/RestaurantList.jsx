import React, { useContext } from 'react';
import { RestaurantContext } from '../../../contexts/RestaurantContext';
import RestaurantItem from './RestaurantItem';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
