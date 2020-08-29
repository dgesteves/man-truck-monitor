import React from 'react';
import pathIcon from '../../../assets/path.png';
import { Marker, Polyline } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getIsLightTheme,
  getPathLocations,
  getStartLocation,
} from '../../../store/selectors';

const lineOptions: google.maps.PolylineOptions = {
  strokeWeight: 8,
  geodesic: true,
};

function PathToCurrentLocation() {
  const startLocation = useSelector(getStartLocation);
  const currentLocation = useSelector(getCurrentLocation);
  const isLightTheme = useSelector(getIsLightTheme);
  const path = useSelector(getPathLocations);

  return (
    <div>
      {path &&
        path.map((location, i) => (
          <Marker key={i} position={location} icon={pathIcon} />
        ))}
      {startLocation && currentLocation && path && (
        <Polyline
          path={[startLocation, ...path, currentLocation]}
          options={{
            ...lineOptions,
            strokeColor: isLightTheme ? '#000' : '#fff',
          }}
        />
      )}
    </div>
  );
}

export default PathToCurrentLocation;
