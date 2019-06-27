// third party libraries
import { combineReducers } from 'redux';
import signupUserReducer from './signupUserReducer';
import incidentReducer from './incidentReducer';

const rootReducer = combineReducers({
  signupUserReducer,
  incidentReducer,
});

export default rootReducer;
