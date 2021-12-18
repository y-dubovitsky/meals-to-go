import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (locations) => {
  console.log(`execute restaurantsRequest(${locations})`);
  if(!locations) locations = "37.7749295,-122.4194155"; //! Checking
  return new Promise((resolve, reject) => {
    const mock = mocks[locations];
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