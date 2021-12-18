import locations from './mock/location.mock';
import camelize from 'camelize';

export const locationRequest = (city) => {
  return new Promise((resolve, reject) => {
    if (!locations.city) reject(`Location for ${city} not found!`);
    resolve(locations.city);
  })
};

export const locationTransform = (city) => {
  const { geometry = {} } = camelize(city.results[0]);
  const { lng = {}, lat = {} } = geometry.location;
  return { lng, lat };
}