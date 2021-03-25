import { useState, useEffect } from 'react';
import { findAll } from '../services/RestaurantApi';

const { createContext } = require('react');

export const RestaurantContext = createContext(null);

function RestaurantContextProvider(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    findAll((response) => {
      setRestaurants(response);
    });
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {props.children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContextProvider;
