import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container} >
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 16
  }
});

export default Search;
