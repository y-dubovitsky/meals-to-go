import React from 'react';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';

const SafeArea = styled.SafeAreaView`
    flex: 1;
    paddingTop: ${StatusBar.currentHeight && StatusBar.currentHeight + 'px'};
`;

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const RestaurantInfoContainer = styled.View`
    backgroundColor: ${props => props.theme.colors.bg.primary};
    padding: ${props => props.theme.space[2]};
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