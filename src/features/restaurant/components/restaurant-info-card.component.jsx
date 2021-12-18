import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import Star from '../../../../assets/star';
import isOpen from '../../../../assets/isOpen';

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.body};
  padding: ${props => props.theme.space[1]};
  color: ${props => props.theme.colors.ui.primary};
`;

const ClosedTemporary = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-style: italic;
  color: ${props => props.theme.colors.ui.error};
`

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RestaurantInfo = styled.View`
  padding: ${props => props.theme.space[1]};
  flex-direction: row;
  justify-content: space-between;
`;

const RestaurantAddress = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  padding: ${props => props.theme.space[1]};
  font-size: ${props => props.theme.fontSizes.caption};
`

const RestaurantCard = styled(Card)`
  backgroundColor: ${props => props.theme.colors.ui.tertiary};
  marginBottom: ${props => props.theme.space[3]}
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
    rating = 3,
    isClosedTemporarily = true,
    place_id = ""
  } = restaurant;

  const calculateRestaurantRating = (rating) => {
    return Array(5).fill(null).map((u, i) => {
      if (i < rating) (
        <SvgXml
          key={i}
          xml={Star}
          width="20"
          height="20"
        />
      )
    })
  }

  const showIsRestaurantOpen = (isOpenNow) => {
    if (isOpenNow) return <SvgXml xml={isOpen} width="20" height="20" />
  }

  const showIsClosedTemporarily = (isClosedTemporarily) => {
    if (isClosedTemporarily) return <ClosedTemporary>Temporary Closed</ClosedTemporary>
  }

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
      <RestaurantInfo>
        <Rating>
          {calculateRestaurantRating(rating)}
        </Rating>
        {showIsClosedTemporarily(isClosedTemporarily)}
        {showIsRestaurantOpen(isOpenNow)}
      </RestaurantInfo>
      <RestaurantAddress>{address}</RestaurantAddress>
    </RestaurantCard>
  );
}

export default RestaurantInfoCard;
