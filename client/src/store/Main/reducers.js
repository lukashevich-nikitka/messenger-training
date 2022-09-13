import { combineReducers } from '@reduxjs/toolkit';
import userReducers from './User/reducers';

const { userNavigationReducers } = userReducers;

const mainReducers = combineReducers({
  userNavigation: userNavigationReducers,
});

export default mainReducers;
