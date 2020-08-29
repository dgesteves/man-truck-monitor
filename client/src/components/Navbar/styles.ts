import { CSSProperties } from 'react';

const common: CSSProperties = {
  position: 'fixed',
  top: '16px',
  left: '16px',
  display: 'flex',
  zIndex: 10,
  padding: '6px 8px',
  justifyContent: 'space-between',
};

export const defaultStyles: CSSProperties = {
  ...common,
  minWidth: '590px',
  height: '42px',
  alignItems: 'center',
};

export const mobilStyles: CSSProperties = {
  ...common,
  flexDirection: 'column',
  height: '150px',
};
