import React from 'react';
import buttonStyles from './styles';
import { setIsLightTheme } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation, getIsLightTheme } from '../../../store/selectors';
import { DARK, LIGHT } from '../../../constants';

const styles = buttonStyles;

function Button() {
  const isLightTheme = useSelector(getIsLightTheme);
  const currentLocation = useSelector(getCurrentLocation);
  const dispatch = useDispatch();

  return (
    <button
      disabled={!currentLocation}
      className="button"
      onClick={() => dispatch(setIsLightTheme(!isLightTheme))}
      style={styles}
    >
      {isLightTheme ? DARK : LIGHT}
    </button>
  );
}

export default Button;
