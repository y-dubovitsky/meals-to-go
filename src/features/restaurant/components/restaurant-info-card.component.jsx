import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: ${props => props.theme.space[1]};
  color: ${props => props.theme.colors.ui.primary}
`;

const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.ui.tertiary}
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[1]};
  backgroundColor: ${props => props.theme.colors.ui.tertiary};
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
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}

export default RestaurantInfoCard;
