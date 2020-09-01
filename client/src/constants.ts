import { Item } from './types';

export const KEY = 'YOUR_API_KEY_GOES_HERE';
export const PROXY_SERVER = 'https://cors-anywhere.herokuapp.com/';
export const PLACES_BASE_URL =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
export const TRUCKS_BASE_URL = 'http://localhost:3001/trucks';
export const STYLE_BREAKING_POINT = 768;
export const INPUT_PLACEHOLDER = 'Search by licence plate';
export const DARK = 'DARK';
export const LIGHT = 'LIGHT';
export const DISTANCE = 'Distance';
export const POI_SELECT_TITLE = 'Select POI type';
export const RADIUS_SELECT_TITLE = 'Select radius';
export const ERROR_VEHICLE_NOT_FOUND =
  'Vehicle not found please enter a valid licence plate.';
export const POI_SELECT_ITEMS: Item[] = [
  {
    label: 'View all',
    value: 'all',
  },
  {
    label: 'Gas stations',
    value: 'gas_station',
  },
  {
    label: 'Restaurants',
    value: 'restaurant',
  },
  {
    label: 'Hotels',
    value: 'lodging',
  },
];

export const RADIUS_SELECT_ITEMS: Item[] = [
  {
    label: '50 Km',
    value: 50000,
  },
  {
    label: '25 Km',
    value: 25000,
  },
  {
    label: '15 Km',
    value: 15000,
  },
  {
    label: '5 Km',
    value: 5000,
  },
];
