import { mocks } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (locations = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[locations];
    if (!mock) reject('not found location!');
    resolve(mock);
  })
};

const restaurantDataTransform = (restaurant) => {
  const result = {
    ...restaurant,
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
  }
  return camelize(result);
}

restaurantsRequest()
  .then(restaurants => {
    console.log(restaurants.results.map(restaurant => restaurantDataTransform(restaurant)))
  })
  .catch(error => console.error(error));