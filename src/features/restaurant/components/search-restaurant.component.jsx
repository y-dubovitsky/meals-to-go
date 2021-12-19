import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const SearchRestaurant = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const { getCityObjectLatLng } = useContext(LocationContext);

  const onChangeSearch = query => setSearchQuery(query);

  const searchCityRestaurants = (city) => {
    console.log(`execute searchCityRestaurants(${city})`)
    getCityObjectLatLng(city);
  }

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        onSubmitEditing={() => searchCityRestaurants(searchQuery)}
        value={searchQuery}
      />
    </SearchContainer>
  );
}

export default SearchRestaurant;
