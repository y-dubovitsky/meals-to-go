import React from 'react';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const RestaurantDetailScreen = ({ route }) => {

  const { restaurant } = route.params;

  return (
    <SafeAreaComponent>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreaComponent>
  )
};

export default RestaurantDetailScreen;