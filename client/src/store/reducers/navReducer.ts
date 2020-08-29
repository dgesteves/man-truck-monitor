import { MyAction, NavState, SET_POI_TYPE, SET_RADIUS } from '../types';

const INITIAL_STATE: NavState = {
  POIType: null,
  radius: null,
};

export default (state = INITIAL_STATE, { type, payload }: MyAction) => {
  switch (type) {
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
