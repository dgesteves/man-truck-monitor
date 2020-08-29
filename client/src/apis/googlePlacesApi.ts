import axios from 'axios';
import { Location } from '../types';
import { KEY, PLACES_BASE_URL, PROXY_SERVER } from '../constants';

export const singleFetchPlaces = async (
  location: Location,
  radius: number,
  type: string
) => {
  const response = await axios.get(`${PROXY_SERVER}${PLACES_BASE_URL}`, {
    params: {
      location: `${location.lat},${location.lng}`,
      radius,
      type,
      key: KEY,
    },
  });
  return response.data.results;
};

export const multipleFetchPlaces = async (
  location: Location,
  radius: number
) => {
  const gasStations = singleFetchPlaces(location, radius, 'gas_station');
  const restaurants = singleFetchPlaces(location, radius, 'restaurant');
  const hotels = singleFetchPlaces(location, radius, 'lodging');

  const [gasStationPlaces, restaurantPlaces, hotelPlaces] = await axios.all([
    gasStations,
    restaurants,
    hotels,
  ]);
  return [...gasStationPlaces, ...restaurantPlaces, ...hotelPlaces];
};
