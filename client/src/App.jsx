import React from 'react';
import './App.css';
import RestaurantCreate from './components/views/RestaurantCreate/RestaurantCreate';
import RestaurantList from './components/views/RestaurantList/RestaurantList';
import RestaurantContextProvider from './contexts/RestaurantContext';

function App() {
  console.log('App');
  return (
    <RestaurantContextProvider>
      <div className='App'>
        <RestaurantList />
        <RestaurantCreate />
      </div>
    </RestaurantContextProvider>
  );
}

export default App;
