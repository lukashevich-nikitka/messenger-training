/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import loginData from './thunks';

const initialState = {
  loginAnswer: '',
};

const loginReducer = createReducer(initialState, {
  [loginData.fulfilled]: (state, action) => {
    state.loginAnswer = action.payload;
  },
});

export default loginReducer;
