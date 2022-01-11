import React, { createContext, useState } from "react";
import { fetchCityObject, transformCityObjectToLatLng } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [cityLocation, setCityLocation] = useState("");
  const [error, setError] = useState();

  // Берет данные из сервиса, преобразует их и сетает с свои поля
  const getCityObjectLatLng = (city) => {
    console.log(`execute getCityObjectLatLng(${city})`);

    setIsLoading(true);
    fetchCityObject(city)
      .then(data => {
        setCityLocation(transformCityObjectToLatLng(data));
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
        console.log(`Oooops, ${error}. Set default city: Antwerp!`);
        getCityObjectLatLng("antwerp");
      });
  }

  return (
    <LocationContext.Provider
      value={{
        cityLocation: cityLocation,
        error: error,
        isLoading, isLoading,
        getCityObjectLatLng: getCityObjectLatLng
      }}
    >
      {props.children}
    </LocationContext.Provider>
  )
}