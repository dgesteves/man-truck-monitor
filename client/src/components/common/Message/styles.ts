import { CSSProperties } from 'react';

const common: CSSProperties = {
  backgroundColor: '#fff',
  border: '2px solid #2998A3',
  padding: '0 8px',
};

export const defaultStyles: CSSProperties = {
  ...common,
  position: 'fixed',
  top: '50px',
  left: '50px',
};

export const mobilStyles: CSSProperties = {
  ...common,
  position: 'fixed',
  top: '200px',
  left: '50px',
};
