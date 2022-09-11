import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authData = createAsyncThunk('auth/authAnswer', async (data) => {
  const response = await axios.post('http://localhost:4200/api/auth', data);
  return response.data;
});

export default authData;
