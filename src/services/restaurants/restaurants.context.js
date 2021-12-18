import React, { createContext, useEffect, useState, useContext } from 'react';
import { restaurantDataTransform, restaurantsRequest } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = (props) => {

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cityLocation } = useContext(LocationContext);

  const fetchRestaurant = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(cityLocation)
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
  }, [cityLocation]);

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