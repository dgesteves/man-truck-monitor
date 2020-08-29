import { Item } from '../../../types';
import { setPOIType, setRadius } from '../../../store/actions';
import { Dispatch } from 'redux';

export const setStoreData = (item: Item, dispatch: Dispatch) => {
  typeof item.value === 'number'
    ? dispatch(setRadius(item.value))
    : dispatch(setPOIType(item.value));
};
