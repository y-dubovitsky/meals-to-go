import React, { useState, useMemo, useEffect, createContext } from 'react';
import { restaurantsRequest, restaurantDataTransform } from '../../services/restaurants/restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = (props) => {
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
};