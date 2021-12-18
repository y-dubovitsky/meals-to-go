import React, { useState, useMemo, useEffect, createContext } from 'react';
import { restaurantsRequest, restaurantDataTransform } from '../../services/restaurants/restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = (props) => {

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurant = () => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest()
        .then(restaurants => (
          restaurants.results.map(restaurant => restaurantDataTransform(restaurant))
        ))
        .then((data) => {
          setRestaurants(data);
          setIsLoading(false);
        })
        .catch(error => setError(error));
    }, 2000)
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: restaurants,
        isLoading,
        error
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
};