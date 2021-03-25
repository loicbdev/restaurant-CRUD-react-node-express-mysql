import React from 'react';
import './RestaurantItem.css';
import { RestaurantProptypes } from '../../../proptypes/RestaurantProptypes';

function RestaurantItem(props) {
  const { id, name, city } = props;
  return (
    <div className="restaurantItem">
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{city}</li>
      </ul>
    </div>
  );
}

RestaurantItem.propTypes = RestaurantProptypes;

export default RestaurantItem;
