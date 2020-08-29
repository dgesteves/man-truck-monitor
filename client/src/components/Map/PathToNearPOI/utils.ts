import { Place } from '../../../types';
import { setDistance } from '../../../store/actions';
import { Dispatch } from 'redux';

export const getDestinationsFromPlaces = (places: Place[]) =>
  places.map(
    (place) => `${place.geometry.location.lat},${place.geometry.location.lng}`
  );

export const getNearestLocationFromResponse = (
  response: google.maps.DistanceMatrixResponse,
  setNearLocation: any,
  places: Place[],
  dispatch: Dispatch
) => {
  const distances = response.rows[0].elements;

  const values = distances.map((dist) => dist.distance.value);
  const minDistance = Math.min(...values);

  const indexOfMinElement = distances.findIndex(
    (place) => place.distance.value === minDistance
  );

  setNearLocation(places[indexOfMinElement].geometry.location);
  dispatch(setDistance(distances[indexOfMinElement].distance.text));
};
