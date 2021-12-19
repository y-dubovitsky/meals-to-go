import React from 'react';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import RestaurantMenuList from '../components/restaurant-menu-list.component';

const RestaurantDetailScreen = ({ route }) => {

  const { restaurant } = route.params;

  return (
    <SafeAreaComponent>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenuList />
    </SafeAreaComponent>
  )
};

export default RestaurantDetailScreen;