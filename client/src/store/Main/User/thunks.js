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

const subscribeToUser = createAsyncThunk('/main/user/userDataDisplay/friends_list', async (data) => {
  const response = await axios.put(`http://localhost:4200/api/subscribe/${data.id}`, data.subscribeId);
  return response.data;
});

const getFriendsList = createAsyncThunk('/main/userDataDisplay/useSubscribers', async (id) => {
  const response = await axios.get(`http://localhost:4200/api/friends/${id}`);
  return response.data;
});

const fillOutTheInfo = createAsyncThunk('main/userDataDisplay/currentUserData/edit', async (data) => {
  const response = await axios.put(`http://localhost:4200/api/options/info/${data.id}`, data.info);
  return response.data;
});

const userThunks = {
  getUserBySelector,
  getCurrentUserData,
  fillOutTheInfo,
  subscribeToUser,
  getFriendsList,
};

export default userThunks;
