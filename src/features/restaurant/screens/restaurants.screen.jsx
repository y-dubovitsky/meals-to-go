import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';

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
    <SafeAreaComponent>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name + Math.random() * 1000}
      >
      </RestaurantList>
    </SafeAreaComponent>
  );
}

export default RestaurantsScreen;