import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';

const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: blue;
    paddingTop: ${StatusBar.currentHeight && StatusBar.currentHeight + 'px'};
`;

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name + Math.random() * 1000}
      >
      </RestaurantList>
    </SafeArea>
  );
}

export default RestaurantsScreen;