import { Place, POI, Location } from '../../types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export const SET_IS_LIGHT_THEME = 'SET_IS_LIGHT_THEME';
export const SET_PLACES = 'SET_PLACES';
export const SET_DISTANCE = 'SET_DISTANCE';
export const SET_POI_TYPE = 'SET_POI_TYPE';
export const SET_RADIUS = 'SET_RADIUS';
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const SET_START_LOCATION = 'SET_START_LOCATION';
export const SET_PATH_LOCATIONS = 'SET_PATH_LOCATIONS';

export interface SetIsLightThemeAction {
  type: typeof SET_IS_LIGHT_THEME;
  payload: boolean;
}

export interface SetPlacesAction {
  type: typeof SET_PLACES;
  payload: Place[];
}

export interface SetDistanceAction {
  type: typeof SET_DISTANCE;
  payload: string;
}

export interface SetPOITypeAction {
  type: typeof SET_POI_TYPE;
  payload: POI;
}

export interface SetRadiusAction {
  type: typeof SET_RADIUS;
  payload: number;
}

export interface SetCurrentLocationAction {
  type: typeof SET_CURRENT_LOCATION;
  payload: Location | null;
}

export interface SetStartLocationAction {
  type: typeof SET_START_LOCATION;
  payload: Location | null;
}

export interface SetPathLocationsAction {
  type: typeof SET_PATH_LOCATIONS;
  payload: Location[] | null;
}

export interface MyAction {
  type: string;
  payload: any;
}

export type MyThunkAction = ThunkAction<
  void,
  AppCombinedState,
  unknown,
  Action
>;

export interface MapState {
  places: Place[] | null;
  currentLocation: Location | null;
  startLocation: Location | null;
  pathLocations: Location[] | null;
  distance: string | null;
}

export interface NavState {
  isLightTheme: boolean;
  POIType: POI | null;
  radius: number | null;
}

export interface AppCombinedState {
  nav: NavState;
  map: MapState;
}
