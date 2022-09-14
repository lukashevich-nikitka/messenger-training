/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import userActions from './actions';
import userThunks from './thunks';

const {
  profile, friends, messages, groups, options, search,
} = userActions.navigation;

const { getUserBySelector, getCurrentUserData } = userThunks;

const initialNavigationState = {
  profile: true,
  friends: false,
  messages: false,
  groups: false,
  options: false,
  search: false,
};

const initialUserListDisplayState = {
  currentUserData: {
    name: 'unknown', age: 'unknown', status: 'unknown', education: 'unknown', profession: 'unknown',
  },
  userListDisplay: [],
};

const userNavigationReducers = createReducer(initialNavigationState, {
  [profile]: (state, action) => {
    state.profile = action.payload;
    state.friends = false;
    state.messages = false;
    state.groups = false;
    state.options = false;
    state.profile = false;
    state.search = false;
  },
  [friends]: (state, action) => {
    state.friends = action.payload;
    state.messages = false;
    state.groups = false;
    state.options = false;
    state.profile = false;
    state.search = false;
  },
  [messages]: (state, action) => {
    state.messages = action.payload;
    state.friends = false;
    state.groups = false;
    state.options = false;
    state.profile = false;
    state.search = false;
  },
  [groups]: (state, action) => {
    state.groups = action.payload;
    state.messages = false;
    state.friends = false;
    state.options = false;
    state.profile = false;
    state.search = false;
  },
  [options]: (state, action) => {
    state.options = action.payload;
    state.messages = false;
    state.groups = false;
    state.friends = false;
    state.profile = false;
    state.search = false;
  },
  [search]: (state, action) => {
    state.options = false;
    state.messages = false;
    state.groups = false;
    state.friends = false;
    state.profile = false;
    state.search = action.payload;
  },
});

const userListDisplayReducers = createReducer(initialUserListDisplayState, {
  [getUserBySelector.fulfilled]: (state, action) => {
    state.userListDisplay = action.payload;
  },
  [getCurrentUserData.fulfilled]: (state, action) => {
    state.currentUserData = action.payload;
  },
});

const userReducers = {
  userNavigationReducers,
  userListDisplayReducers,
};

export default userReducers;
