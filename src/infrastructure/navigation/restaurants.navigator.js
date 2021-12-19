import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurant/screens/restaurants.screen';

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen name="Restaurants" component={RestaurantsScreen} />
      <RestaurantsStack.Screen name="RestaurantDetail" component={
      () => <View><Text>Restaurant Detail</Text></View>
      } />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;