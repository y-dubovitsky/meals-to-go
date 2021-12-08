import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import RestaurantInfo from '../components/restaurant-info.component';
import SearchRestaurant from '../components/search-restaurant.component';

const RestaurantsScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SearchRestaurant />
      <RestaurantInfo />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default RestaurantsScreen;