/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import authData from './thunks';

const initialState = {
  authAnswer: '',
};

const authReducer = createReducer(initialState, {
  [authData.fulfilled]: (state, action) => {
    state.authAnswer = action.payload;
  },
});

export default authReducer;
