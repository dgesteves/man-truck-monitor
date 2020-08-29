import React, { useState } from 'react';
import { DistanceMatrixService, Polyline } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getPlaces,
  getPOIType,
} from '../../../store/selectors';
import {
  getDestinationsFromPlaces,
  getNearestLocationFromResponse,
} from './utils';

const pathOptions: google.maps.PolylineOptions = {
  strokeColor: '#2998A3',
  strokeWeight: 8,
  geodesic: true,
};

function PathToNearPOI() {
  const currentLocation = useSelector(getCurrentLocation);
  const places = useSelector(getPlaces);
  const POIType = useSelector(getPOIType);
  const [nearLocation, setNearLocation] = useState({ lat: 0, lng: 0 });
  const dispatch = useDispatch();

  const getNearestLocation = (response: google.maps.DistanceMatrixResponse) => {
    if (response && places) {
      getNearestLocationFromResponse(
        response,
        setNearLocation,
        places,
        dispatch
      );
    }
  };

  return (
    <div>
      {currentLocation && places && nearLocation && POIType !== 'all' && (
        <>
          <DistanceMatrixService
            options={{
              origins: [`${currentLocation.lat},${currentLocation.lng}`],
              destinations: getDestinationsFromPlaces(places),
              travelMode: 'DRIVING' as google.maps.TravelMode,
            }}
            callback={getNearestLocation}
          />
          <Polyline
            options={pathOptions}
            path={[currentLocation, nearLocation]}
          />
        </>
      )}
    </div>
  );
}

export default PathToNearPOI;
