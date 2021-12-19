import React from 'react';
import SafeAreaComponent from '../../../components/utils/safe-area.component';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <SafeAreaComponent>
      <MapView style={{height: "100%"}}/>
    </SafeAreaComponent>
  )
};

export default MapScreen;

