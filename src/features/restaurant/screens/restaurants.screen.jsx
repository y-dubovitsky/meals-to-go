import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import SearchRestaurant from '../components/search-restaurant.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import Loader from '../../../components/utils/loader.component';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <SafeAreaComponent>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      {isLoading ?
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
        :
        <RestaurantList
          data={restaurants}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail")}
            >
              <RestaurantInfoCard restaurant={item.item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        >
        </RestaurantList>
      }
    </SafeAreaComponent>
  );
}

export default RestaurantsScreen;