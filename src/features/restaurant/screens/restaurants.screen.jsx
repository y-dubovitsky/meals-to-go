import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.contex';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  return (
    <SafeAreaComponent>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name}
      >
      </RestaurantList>
    </SafeAreaComponent>
  );
}

export default RestaurantsScreen;