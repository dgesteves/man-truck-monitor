import {
  MyAction,
  NavState,
  SET_IS_LIGHT_THEME,
  SET_POI_TYPE,
  SET_RADIUS,
} from '../types';

export const NAV_INITIAL_STATE: NavState = {
  isLightTheme: true,
  POIType: null,
  radius: null,
};

export const navReducer = (
  state = NAV_INITIAL_STATE,
  { type, payload }: MyAction
) => {
  switch (type) {
    case SET_IS_LIGHT_THEME:
      return {
        ...state,
        isLightTheme: payload,
      };
    case SET_POI_TYPE:
      return {
        ...state,
        POIType: payload,
      };
    case SET_RADIUS:
      return {
        ...state,
        radius: payload,
      };
    default:
      return state;
  }
};
