import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginData = createAsyncThunk('login/loginAnswer', async (data) => {
  const response = await axios.post('http://localhost:4200/api/login', data);
  return response.data;
});

export default loginData;
