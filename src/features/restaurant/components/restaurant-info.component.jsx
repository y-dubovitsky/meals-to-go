import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RestaurantInfo = () => {
  return (
    <View style={styles.container} >
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1
  }
});

export default RestaurantInfo;
