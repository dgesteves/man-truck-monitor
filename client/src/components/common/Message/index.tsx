import React from 'react';
import { MessageProps } from '../../../types';
import useWindowWidth from '../../../customHooks/useWindowWidth';
import { STYLE_BREAKING_POINT } from '../../../constants';
import { defaultStyles, mobilStyles } from './styles';

const styles = {
  default: defaultStyles,
  mobil: mobilStyles,
};

function Message({ text }: MessageProps) {
  const windowWidth = useWindowWidth();
  return (
    <h3
      style={
        windowWidth! > STYLE_BREAKING_POINT ? styles.default : styles.mobil
      }
    >
      {text}
    </h3>
  );
}

export default Message;
