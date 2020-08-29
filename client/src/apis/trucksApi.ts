import axios from 'axios';
import { TRUCKS_BASE_URL } from '../constants';
import { TruckApiResponse } from '../types';

export const fetchTruckByLicencePlate = async (licencePlate: string) => {
  const licencePlateUpperCase = licencePlate.toUpperCase();
  try {
    const response = await axios.get<TruckApiResponse[]>(`${TRUCKS_BASE_URL}`, {
      params: {
        licencePlate: licencePlateUpperCase,
      },
    });
    return response.data[0].locationHistory;
  } catch (e) {
    return null;
  }
};

export const fetchCurrentLocationByLicencePlate = async (
  licencePlate: string
) => {
  const response = await fetchTruckByLicencePlate(licencePlate);
  return response && response[response.length - 1];
};

export const fetchStartLocationByLicencePlate = async (
  licencePlate: string
) => {
  const response = await fetchTruckByLicencePlate(licencePlate);
  return response && response[0];
};

export const fetchPathLocationsByLicencePlate = async (
  licencePlate: string
) => {
  const response = await fetchTruckByLicencePlate(licencePlate);
  return (
    response &&
    response.filter((_, index) => index !== 0 && index !== response.length - 1)
  );
};
