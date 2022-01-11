import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const findRestaurantsByCityLocation = ({lat, lng}) => {
  console.log(`execute fetchRestaurantsByCityLocation(${lat}, ${lng})`);

  if(!lat || !lng) { //! antwerp default coordinate
    lat = 51.219448; 
    lng = 4.402464
  }

  return new Promise((resolve, reject) => {
    const mock = mocks[`${lat},${lng}`]; //? Упростить
    if (!mock) reject('not found location!');
    resolve(mock);
  })
};

export const restaurantDataTransform = (restaurant) => {
  const result = {
    ...restaurant,
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    photos: [mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]],
    address: restaurant.vicinity
  }
  return camelize(result);
}