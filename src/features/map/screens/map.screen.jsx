import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import MapSearch from '../components/map-search.component';
import Loader from '../../../components/utils/loader.component';

const Map = styled(MapView)`
  height: 100%
`;

const MapScreen = () => {

  const { cityLocation } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = cityLocation;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [cityLocation]);

  if (!cityLocation || cityLocation === undefined) {
    return <Loader />;
  }

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
        {restaurants.map(restaurant => {
          return <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          />
        }
        )}
      </Map>
    </>
  )
};

export default MapScreen;

