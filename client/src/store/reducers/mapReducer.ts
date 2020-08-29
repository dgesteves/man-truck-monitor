import {
  MapState,
  MyAction,
  SET_CURRENT_LOCATION,
  SET_DISTANCE,
  SET_IS_LIGHT_THEME,
  SET_PATH_LOCATIONS,
  SET_PLACES,
  SET_START_LOCATION,
} from '../types';

const INITIAL_STATE: MapState = {
  isLightTheme: true,
  places: null,
  currentLocation: null,
  startLocation: null,
  pathLocations: null,
  distance: null,
};

export default (state = INITIAL_STATE, { type, payload }: MyAction) => {
  switch (type) {
    case SET_IS_LIGHT_THEME:
      return {
        ...state,
        isLightTheme: payload,
      };
    case SET_PLACES:
      return {
        ...state,
        places: payload,
      };
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: payload,
      };
    case SET_START_LOCATION:
      return {
        ...state,
        startLocation: payload,
      };
    case SET_PATH_LOCATIONS:
      return {
        ...state,
        pathLocations: payload,
      };
    case SET_DISTANCE:
      return {
        ...state,
        distance: payload,
      };
    default:
      return state;
  }
};
