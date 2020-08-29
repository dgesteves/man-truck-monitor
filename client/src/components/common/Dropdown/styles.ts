import { CSSProperties } from 'react';

const dropdownStyles: {
  selectWrapper: CSSProperties;
  select: CSSProperties;
  selectTrigger: CSSProperties;
  triggerText: CSSProperties;
  options: CSSProperties;
  option: CSSProperties;
} = {
  selectWrapper: {
    display: 'flex',
    height: '30px',
    border: '2px solid #2998A3',
    borderRadius: '2px',
    width: '130px',
    backgroundColor: '#fff',
  },
  select: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: '0 8px',
    flex: 1,
  },
  selectTrigger: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  triggerText: {
    fontSize: '12px',
  },
  options: {
    position: 'absolute',
    top: '26px',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '2px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.3)',
    zIndex: 10,
  },
  option: {
    padding: '8px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export default dropdownStyles;
