import React from 'react';
import { defaultStyles, mobilStyles } from './styles';
import Button from '../common/Button';
import useWindowWidth from '../../customHooks/useWindowWidth';
import {
  DARK,
  INPUT_PLACEHOLDER,
  LIGHT,
  POI_SELECT_ITEMS,
  POI_SELECT_TITLE,
  RADIUS_SELECT_ITEMS,
  RADIUS_SELECT_TITLE,
  STYLE_BREAKING_POINT,
} from '../../constants';
import Dropdown from '../common/Dropdown';
import AsyncSearch from '../common/AsyncSearch';
import {
  fetchCurrentLocation,
  fetchPathLocations,
  fetchStartLocation,
  setIsLightTheme,
  setPOIType,
  setRadius,
} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLightTheme } from '../../store/selectors';
import { Item } from '../../types';

const styles = {
  default: defaultStyles,
  mobil: mobilStyles,
};

function Navbar() {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();
  const isLightTheme = useSelector(getIsLightTheme);

  const onDebounceChange = (debounceTerm: string) => {
    dispatch(fetchCurrentLocation(debounceTerm));
    dispatch(fetchStartLocation(debounceTerm));
    dispatch(fetchPathLocations(debounceTerm));
  };

  const onClick = () => {
    dispatch(setIsLightTheme(!isLightTheme));
  };

  const onItemSelect = (item: Item) => {
    typeof item.value === 'number'
      ? dispatch(setRadius(item.value))
      : dispatch(setPOIType(item.value));
  };

  return (
    <div
      style={
        windowWidth! > STYLE_BREAKING_POINT ? styles.default : styles.mobil
      }
    >
      <Button text={isLightTheme ? DARK : LIGHT} onClick={onClick} />
      <AsyncSearch
        placeholder={INPUT_PLACEHOLDER}
        onDebounceChange={onDebounceChange}
      />
      <Dropdown
        items={POI_SELECT_ITEMS}
        title={POI_SELECT_TITLE}
        onItemSelect={onItemSelect}
      />
      <Dropdown
        items={RADIUS_SELECT_ITEMS}
        title={RADIUS_SELECT_TITLE}
        onItemSelect={onItemSelect}
      />
    </div>
  );
}

export default Navbar;
