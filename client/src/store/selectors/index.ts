import { AppCombinedState } from '../types';

export const getIsLightTheme = (state: AppCombinedState) =>
  state.nav.isLightTheme;

export const getPlaces = (state: AppCombinedState) => state.map.places;

export const getRadius = (state: AppCombinedState) => state.nav.radius;

export const getPOIType = (state: AppCombinedState) => state.nav.POIType;

export const getCurrentLocation = (state: AppCombinedState) =>
  state.map.currentLocation;

export const getStartLocation = (state: AppCombinedState) =>
  state.map.startLocation;

export const getPathLocations = (state: AppCombinedState) =>
  state.map.pathLocations;

export const getDistance = (state: AppCombinedState) => state.map.distance;
