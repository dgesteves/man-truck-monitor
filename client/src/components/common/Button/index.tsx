import React from 'react';
import buttonStyles from './styles';
import { useSelector } from 'react-redux';
import { getCurrentLocation } from '../../../store/selectors';
import { ButtonProps } from '../../../types';

const styles = buttonStyles;

function Button({ text, onClick }: ButtonProps) {
  const currentLocation = useSelector(getCurrentLocation);

  return (
    <button
      data-testid="my-testId"
      disabled={!currentLocation}
      className="button"
      onClick={onClick}
      style={styles}
    >
      {text}
    </button>
  );
}

export default Button;
