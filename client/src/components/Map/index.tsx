import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import currentLocation from '../../assets/current-location.png';
import startPosition from '../../assets/start-location.png';
import { containerStyle, darkTheme, lightTheme } from './styles';
import { ERROR_VEHICLE_NOT_FOUND, KEY } from '../../constants';
import PointsOfInterest from './PointsOfInterest';
import { mapOptions } from './utils';
import {
  getCurrentLocation,
  getIsLightTheme,
  getPOIType,
  getRadius,
  getStartLocation,
} from '../../store/selectors';
import { useSelector } from 'react-redux';
import PathToCurrentLocation from './PathToCurrentLocation';
import PathToNearPOI from './PathToNearPOI';
import CustomInfo from './CustomInfo';
import Message from '../common/Message';
import { Location } from '../../types';

function Map() {
  const isLightTheme = useSelector(getIsLightTheme);
  const radius = useSelector(getRadius);
  const POIType = useSelector(getPOIType);
  const center = useSelector(getCurrentLocation);
  const startLocation = useSelector(getStartLocation);
  const [defaultLocation, setDefaultLocation] = useState<Location>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: KEY,
  });

  useEffect(() => {
    if (!center) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDefaultLocation({ lat: latitude, lng: longitude });
        },
        (err) => console.log(err)
      );
    }
  }, [center]);

  const options: google.maps.MapOptions = {
    ...mapOptions,
    styles: (isLightTheme
      ? lightTheme
      : darkTheme) as google.maps.MapTypeStyle[],
    center: center ? center : defaultLocation,
  };

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>loading map...</div>;

  const renderDataAfterVehicleFetch = () =>
    startLocation &&
    center && (
      <>
        <Marker position={center} icon={currentLocation} />
        <PathToNearPOI />
        <CustomInfo />
        <Marker position={startLocation} icon={startPosition} />
        <PathToCurrentLocation />
        {POIType && radius && <PointsOfInterest />}
      </>
    );

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} zoom={13} options={options}>
        {!startLocation && defaultLocation ? (
          <Marker position={defaultLocation} />
        ) : (
          renderDataAfterVehicleFetch()
        )}
      </GoogleMap>
      {!startLocation && <Message text={ERROR_VEHICLE_NOT_FOUND} />}
    </div>
  );
}

export default Map;
