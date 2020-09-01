import React, { useEffect, useState } from 'react';
import { inputStyles } from './styles';
import { AsyncSearchProps } from '../../../types';

function AsyncSearch({ placeholder, onDebounceChange }: AsyncSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debounceTerm) {
      onDebounceChange(debounceTerm);
    }
  }, [debounceTerm, onDebounceChange]);

  return (
    <input
      className="input"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      style={inputStyles}
    />
  );
}

export default AsyncSearch;
