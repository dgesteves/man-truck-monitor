import {
  SET_DISTANCE,
  SET_IS_LIGHT_THEME,
  SET_POI_TYPE,
  SET_RADIUS,
} from '../store/types';
import {
  setDistance,
  setIsLightTheme,
  setPOIType,
  setRadius,
} from '../store/actions';

describe('actions', function () {
  it('should create an action to toggle theme', function () {
    const value = true;
    const expectedAction = {
      type: SET_IS_LIGHT_THEME,
      payload: value,
    };
    expect(setIsLightTheme(value)).toEqual(expectedAction);
  });

  it('should create an action to set POI', function () {
    const type = 'gas_station';
    const expectedAction = {
      type: SET_POI_TYPE,
      payload: type,
    };
    expect(setPOIType(type)).toEqual(expectedAction);
  });

  it('should create an action to set search radius', function () {
    const radius = 25;
    const expectedAction = {
      type: SET_RADIUS,
      payload: radius,
    };
    expect(setRadius(radius)).toEqual(expectedAction);
  });

  it('should create an action to set distance', function () {
    const distance = '7.3km';
    const expectedAction = {
      type: SET_DISTANCE,
      payload: distance,
    };
    expect(setDistance(distance)).toEqual(expectedAction);
  });
});
