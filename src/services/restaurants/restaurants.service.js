import { mocks } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (locations = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[locations];
    if (!mock) reject('not found location!');
    resolve(mock);
  })
};

restaurantsRequest()
  .then(result => console.log(camelize(result)))
  .catch(error => console.error(error));