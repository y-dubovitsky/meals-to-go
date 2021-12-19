import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from "react";
import RestaurantDetailScreen from '../../features/restaurant/screens/restaurant-detail.screen';
import RestaurantsScreen from '../../features/restaurant/screens/restaurants.screen';

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS
      }}
      >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;