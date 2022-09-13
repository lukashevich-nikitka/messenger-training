import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth/reducers';
import loginReducer from './Login/reducers';
import mainReducers from './Main/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  main: mainReducers,
});

export default rootReducer;
