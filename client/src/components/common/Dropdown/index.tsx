import React, { useCallback, useRef, useState } from 'react';
import arrow from '../../../assets/arrow-down.png';
import { DropdownProps, Item } from '../../../types';
import dropdownStyles from './styles';
import useOnClickOutside from '../../../customHooks/useOnClickOutside';
import { useSelector } from 'react-redux';
import { getCurrentLocation } from '../../../store/selectors';

const styles = dropdownStyles;

function Dropdown({ items, title, onItemSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerText, setTriggerText] = useState(title);
  const selectRef = useRef<HTMLDivElement>(null);
  const currentLocation = useSelector(getCurrentLocation);

  const memoizedHandler = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(selectRef, memoizedHandler);

  const onItemClick = (item: Item) => {
    setTriggerText(item.label);
    setIsOpen(false);
    onItemSelect(item);
  };

  const renderOptions = () => (
    <div style={styles.options}>
      {items.map((item) => (
        <span
          className="option"
          style={styles.option}
          key={item.value}
          onClick={() => onItemClick(item)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );

  return (
    <div style={styles.selectWrapper}>
      <div style={styles.select} ref={selectRef}>
        <div
          data-disabled={!currentLocation}
          style={styles.selectTrigger}
          className="dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={styles.triggerText}>{triggerText}</span>
          <img src={arrow} alt="arrow" />
        </div>
        {isOpen && renderOptions()}
      </div>
    </div>
  );
}

export default Dropdown;
