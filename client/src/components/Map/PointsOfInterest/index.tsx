import React, { useEffect } from 'react';
import { Place } from '../../../types';
import { Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getPlaces,
  getPOIType,
  getRadius,
} from '../../../store/selectors';
import gasStation from '../../../assets/gas-station.png';
import restaurant from '../../../assets/restaurant.png';
import hotel from '../../../assets/hotel.png';
import { fetchAllPlaces, fetchPlaces } from '../../../store/actions';

function PointsOfInterest() {
  const places = useSelector(getPlaces);
  const type = useSelector(getPOIType);
  const POIType = useSelector(getPOIType);
  const currentLocation = useSelector(getCurrentLocation);
  const radius = useSelector(getRadius);
  const dispatch = useDispatch();

  useEffect(() => {
    if (POIType && currentLocation && radius) {
      POIType === 'all'
        ? dispatch(fetchAllPlaces(currentLocation, radius))
        : dispatch(fetchPlaces(currentLocation, radius, POIType));
    }
  }, [POIType, radius, currentLocation, dispatch]);

  const renderIcons = (place: Place) => {
    if (type === 'all') {
      if (place.types.includes('gas_station')) {
        return gasStation;
      }
      if (place.types.includes('restaurant')) {
        return restaurant;
      }
      if (place.types.includes('lodging')) {
        return hotel;
      }
    } else {
      switch (type) {
        case 'gas_station':
          return gasStation;
        case 'lodging':
          return hotel;
        case 'restaurant':
          return restaurant;
      }
    }
  };

  return (
    <div>
      {places &&
        places.map((place: Place, i: number) => (
          <Marker
            key={`${i}${place.place_id}`}
            position={place.geometry.location}
            icon={renderIcons(place)}
          />
        ))}
    </div>
  );
}

export default PointsOfInterest;
