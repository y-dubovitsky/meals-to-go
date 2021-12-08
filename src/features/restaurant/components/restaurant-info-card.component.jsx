import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Undefinde Restaurant",
    icon,
    photos = [
      "https://www.restoclub.ru/uploads/place_thumbnail_big/e/e/e/7/eee71a7fdbab3bae6fbc3be9679e9909.jpg",
      "https://www.restoclub.ru/uploads/place_thumbnail_big/2/d/a/7/2da765f18aacec1e181d4a6ce5461c79.jpg"
    ],
    address = "St.Petersburg, str.Arbat, h.34",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily
  } = restaurant;


  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white'
  },
  cover: {
    padding: 10,
    backgroundColor: "white"
  }
})

export default RestaurantInfoCard;
