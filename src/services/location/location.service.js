import { locations as loc } from './mock/location.mock';

export const fetchAllCityObjects = (locations = loc) => {
  console.log(`execute fetchAllLocations(${locations})`)
  return new Promise((resolve, reject) => {
    if (!locations) reject("There is no locations!");
    resolve(locations);
  })
};

export const fetchCityObject = (city, locations = loc) => {
  console.log(`execute fetchCityObject(${city}, ${locations})`)
  return new Promise((resolve, reject) => {
    if (!locations[city.toLowerCase()]) reject(`There is no ${city} location!`);
    resolve(locations[city.toLowerCase()]);
  })
};

/**
 * Достает из объекта его локацию в виде "51.219448,4.402464"
 */
export const transformCityObjectToLatLng = (cityObject) => {
  console.log(`execute transformCityObjectToLatLng(${cityObject})`);
  const results = cityObject.results[0];
  const geometry = results.geometry;
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};