import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import List from './src/components/List';
import Search from './src/components/Search';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple'
  },
});
