import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';
import styled from 'styled-components';
import { StatusBar } from 'react-native';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[2]};
    position: absolute;
    z-index: 1000;
    width: 100%;
    top: ${StatusBar.currentHeight && StatusBar.currentHeight + 'px'};
`;

const MapSearch = () => {

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
        icon="map"
        onChangeText={onChangeSearch}
        onSubmitEditing={() => searchCityRestaurants(searchQuery)}
        value={searchQuery}
      />
    </SearchContainer>
  );
}

export default MapSearch;
