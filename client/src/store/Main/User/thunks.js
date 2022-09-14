import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserBySelector = createAsyncThunk('main/userDataDisplay/userListDisplay', async (selector) => {
  const response = await axios.get(`http://localhost:4200/api/find_user/${selector}/`);
  return response.data;
});

const getCurrentUserData = createAsyncThunk('main/userDataDisplay/currentUserData/', async (jwt) => {
  const response = await axios.get(`http://localhost:4200/api/user_data/${jwt}`);
  return response.data;
});

const subscribeToUser = createAsyncThunk('/main/user/userDataDisplay/friends_list', async (id) => {
  const response = await axios.put(`http://localhost:4200/api/friends_list/${id}`);
  return response.data;
});

const userThunks = {
  getUserBySelector,
  getCurrentUserData,
  subscribeToUser,
};

export default userThunks;
