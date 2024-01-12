import {combineReducers} from 'redux';
import childInfoReducer from './childInfoSlice';

export const rootReducer = combineReducers({
  childInfo: childInfoReducer,
});
