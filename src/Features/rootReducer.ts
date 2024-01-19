import {combineReducers} from 'redux';
import childInfoReducer from './childInfoSlice';
import parentsRegistrationReducer from './parentsRegistrationSlice';
import groupCreationReducer from './groupCreationSlice';

export const rootReducer = combineReducers({
  childInfo: childInfoReducer,
  parentsRegistration: parentsRegistrationReducer,
  groupCreation: groupCreationReducer,
});
