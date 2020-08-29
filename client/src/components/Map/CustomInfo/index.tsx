import React from 'react';
import { InfoBox } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getDistance,
  getPlaces,
  getPOIType,
} from '../../../store/selectors';
import { infoStyles } from './styles';
import { DISTANCE } from '../../../constants';

const options = {
  closeBoxURL: '',
};

const styles = infoStyles;

function CustomInfo() {
  const currentLocation = useSelector(getCurrentLocation);
  const distance = useSelector(getDistance);
  const places = useSelector(getPlaces);
  const POIType = useSelector(getPOIType);

  return (
    <div>
      {currentLocation && places && distance && POIType !== 'all' && (
        <InfoBox position={currentLocation} options={options}>
          <div style={styles}>{`${DISTANCE}: ${distance}`}</div>
        </InfoBox>
      )}
    </div>
  );
}

export default CustomInfo;
