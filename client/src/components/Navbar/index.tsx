import React from 'react';
import { defaultStyles, mobilStyles } from './styles';
import Button from '../common/Button';
import useWindowWidth from '../../customHooks/useWindowWidth';
import {
  INPUT_PLACEHOLDER,
  POI_SELECT_ITEMS,
  POI_SELECT_TITLE,
  RADIUS_SELECT_ITEMS,
  RADIUS_SELECT_TITLE,
  STYLE_BREAKING_POINT,
} from '../../constants';
import Dropdown from '../common/Dropdown';
import AsyncSearch from '../common/AsyncSearch';

const styles = {
  default: defaultStyles,
  mobil: mobilStyles,
};

function Navbar() {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={
        windowWidth! > STYLE_BREAKING_POINT ? styles.default : styles.mobil
      }
    >
      <Button />
      <AsyncSearch placeholder={INPUT_PLACEHOLDER} />
      <Dropdown items={POI_SELECT_ITEMS} title={POI_SELECT_TITLE} />
      <Dropdown items={RADIUS_SELECT_ITEMS} title={RADIUS_SELECT_TITLE} />
    </div>
  );
}

export default Navbar;
