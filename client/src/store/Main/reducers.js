import { combineReducers } from '@reduxjs/toolkit';
import userReducers from './User/reducers';

const { userNavigationReducers, userListDisplayReducers } = userReducers;

const mainReducers = combineReducers({
  userNavigation: userNavigationReducers,
  userDataDisplay: userListDisplayReducers,
});

export default mainReducers;
