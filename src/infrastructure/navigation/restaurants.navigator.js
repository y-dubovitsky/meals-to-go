import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurant/screens/restaurants.screen';

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen name="Home" component={RestaurantsScreen} />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;