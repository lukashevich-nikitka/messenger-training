import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth/reducers';
import loginReducer from './Login/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

export default rootReducer;
