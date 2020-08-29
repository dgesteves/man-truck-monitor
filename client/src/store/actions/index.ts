import {
  MyThunkAction,
  SET_CURRENT_LOCATION,
  SET_DISTANCE,
  SET_IS_LIGHT_THEME,
  SET_PATH_LOCATIONS,
  SET_PLACES,
  SET_POI_TYPE,
  SET_RADIUS,
  SET_START_LOCATION,
  SetCurrentLocationAction,
  SetDistanceAction,
  SetIsLightThemeAction,
  SetPathLocationsAction,
  SetPlacesAction,
  SetPOITypeAction,
  SetRadiusAction,
  SetStartLocationAction,
} from '../types';
import { Location, Place, POI } from '../../types';
import {
  multipleFetchPlaces,
  singleFetchPlaces,
} from '../../apis/googlePlacesApi';
import {
  fetchCurrentLocationByLicencePlate,
  fetchPathLocationsByLicencePlate,
  fetchStartLocationByLicencePlate,
} from '../../apis/trucksApi';

export const setIsLightTheme = (value: boolean): SetIsLightThemeAction => ({
  type: SET_IS_LIGHT_THEME,
  payload: value,
});

export const setPOIType = (type: POI): SetPOITypeAction => ({
  type: SET_POI_TYPE,
  payload: type,
});

export const setRadius = (radius: number): SetRadiusAction => ({
  type: SET_RADIUS,
  payload: radius,
});

export const setDistance = (distance: string): SetDistanceAction => ({
  type: SET_DISTANCE,
  payload: distance,
});

const setCurrentLocation = (
  location: Location | null
): SetCurrentLocationAction => ({
  type: SET_CURRENT_LOCATION,
  payload: location,
});

const setStartLocation = (
  location: Location | null
): SetStartLocationAction => ({
  type: SET_START_LOCATION,
  payload: location,
});

const setPathLocations = (
  locations: Location[] | null
): SetPathLocationsAction => ({
  type: SET_PATH_LOCATIONS,
  payload: locations,
});

const setPlaces = (places: Place[]): SetPlacesAction => ({
  type: SET_PLACES,
  payload: places,
});

export const fetchAllPlaces = (
  location: Location,
  radius: number
): MyThunkAction => async (dispatch) => {
  const response = await multipleFetchPlaces(location, radius);
  dispatch(setPlaces(response));
};

export const fetchPlaces = (
  location: Location,
  radius: number,
  type: POI
): MyThunkAction => async (dispatch) => {
  const response = await singleFetchPlaces(location, radius, type);
  dispatch(setPlaces(response));
};

export const fetchCurrentLocation = (
  licencePlate: string
): MyThunkAction => async (dispatch) => {
  const response = await fetchCurrentLocationByLicencePlate(licencePlate);
  dispatch(setCurrentLocation(response));
};

export const fetchStartLocation = (
  licencePlate: string
): MyThunkAction => async (dispatch) => {
  const response = await fetchStartLocationByLicencePlate(licencePlate);
  dispatch(setStartLocation(response));
};

export const fetchPathLocations = (
  licencePlate: string
): MyThunkAction => async (dispatch) => {
  const response = await fetchPathLocationsByLicencePlate(licencePlate);
  dispatch(setPathLocations(response));
};
