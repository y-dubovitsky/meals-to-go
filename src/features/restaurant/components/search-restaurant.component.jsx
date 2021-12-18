import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

const SearchRestaurant = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const { getCityObjectLatLng } = useContext(LocationContext);

  const onChangeSearch = query => setSearchQuery(query);

  const searchCityRestaurants = (city) => {
    console.log(`execute searchCityRestaurants(${city})`)
    getCityObjectLatLng(city);
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      onSubmitEditing={() => searchCityRestaurants(searchQuery)}
      value={searchQuery}
    />
  );
}

export default SearchRestaurant;
