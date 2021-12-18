import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
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

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  if (isLoading) {
    return (
      <Loader><Text>Loading</Text></Loader>
    )
  }

  return (
    <SafeAreaComponent>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={(item) => {
          return <RestaurantInfoCard restaurant={item.item} />
        }}
        keyExtractor={item => item.name}
      >
      </RestaurantList>
    </SafeAreaComponent>
  );
}

export default RestaurantsScreen;