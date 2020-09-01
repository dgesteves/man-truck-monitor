import { CombinedState, combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { AppCombinedState } from '../types';
import { navReducer } from './navReducer';

export default combineReducers<CombinedState<AppCombinedState>>({
  map: mapReducer,
  nav: navReducer,
});
