import {
  MapState,
  MyAction,
  SET_CURRENT_LOCATION,
  SET_DISTANCE,
  SET_PATH_LOCATIONS,
  SET_PLACES,
  SET_START_LOCATION,
} from '../types';

export const MAP_INITIAL_STATE: MapState = {
  places: null,
  currentLocation: null,
  startLocation: null,
  pathLocations: null,
  distance: null,
};

export const mapReducer = (
  state = MAP_INITIAL_STATE,
  { type, payload }: MyAction
) => {
  switch (type) {
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
