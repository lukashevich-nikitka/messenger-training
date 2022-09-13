/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import userActions from './actions';

const {
  friends, messages, groups, options,
} = userActions;

const initialState = {
  friends: false,
  messages: false,
  groups: false,
  options: false,
};

const userNavigationReducers = createReducer(initialState, {
  [friends]: (state, action) => {
    state.friends = action.payload;
  },
  [messages]: (state, action) => {
    state.messages = action.payload;
  },
  [groups]: (state, action) => {
    state.groups = action.payload;
  },
  [options]: (state, action) => {
    state.options = action.payload;
  },
});

const userReducers = {
  userNavigationReducers,
};

export default userReducers;
