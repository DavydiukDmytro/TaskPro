import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/signup', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const newError = {
        message: error.message,
        status: error.request.status,
      };
      return thunkAPI.rejectWithValue(newError);
    }
  }
);

export const login = createAsyncThunk('user/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/api/users/login', body);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    const newError = {
      message: error.message,
      status: error.request.status,
    };
    return thunkAPI.rejectWithValue(newError);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    clearAuthHeader();
  } catch (error) {
    const newError = { message: error.message, status: error.request.status };
    return thunkAPI.rejectWithValue(newError);
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async (body, thunkAPI) => {
    try {
      const res = await axios.patch('/api/users/update', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const newError = {
        message: error.message,
        status: error.request.status,
      };
      return thunkAPI.rejectWithValue(newError);
    }
  }
);
