import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import MapSearch from '../components/map-search.component';

const Map = styled(MapView)`
  height: 100%
`;

const MapScreen = () => {

  const { cityLocation } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  const {lat, lng, viewport} = cityLocation;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [cityLocation]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
      </Map>
    </>
  )
};

export default MapScreen;

