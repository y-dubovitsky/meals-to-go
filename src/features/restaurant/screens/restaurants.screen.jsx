import React from 'react';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';

const calcSafeAreaPaddingTop = () => {
  return Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0
}

const SafeArea = styled.SafeAreaView`
    flex: 1;
    paddingTop: ${calcSafeAreaPaddingTop()};
`;

const SearchContainer = styled.View`
    padding: 16px;
`;

const RestaurantInfoContainer = styled.View`
    backgroundColor: blue;
    padding: 16px;
    flex: 1;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <RestaurantInfoContainer>
        <RestaurantInfoCard />
      </RestaurantInfoContainer>
    </SafeArea>
  );
}

export default RestaurantsScreen;