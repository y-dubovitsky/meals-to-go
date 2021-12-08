import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import RestaurantInfo from '../components/restaurant-info.component';
import SearchRestaurant from '../components/search-restaurant.component';

const RestaurantsScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchRestaurant />
      </View>
      <View style={styles.restInfo}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16
  },
  restInfo: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1
  }
});

export default RestaurantsScreen;