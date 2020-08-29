import React, { useEffect, useState } from 'react';
import {
  fetchCurrentLocation,
  fetchPathLocations,
  fetchStartLocation,
} from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { inputStyles } from './styles';
import { AsyncSearchProps } from '../../../types';

function AsyncSearch({ placeholder }: AsyncSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);
  const dispatch = useDispatch();

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
      dispatch(fetchCurrentLocation(debounceTerm));
      dispatch(fetchStartLocation(debounceTerm));
      dispatch(fetchPathLocations(debounceTerm));
    }
  }, [debounceTerm, dispatch]);

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
