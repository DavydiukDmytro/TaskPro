import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://task-pro.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/registration',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/api/user/registration', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const newError = {
        message: error.message,
        status: error.request.status,
      };
      toast.success('Oh! You are not registered! Try again.');

      return thunkAPI.rejectWithValue(newError);
    }
  }
);

export const login = createAsyncThunk('user/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/api/user/login', body);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    const newError = {
      message: error.message,
      status: error.request.status,
    };
    toast.success('Oh! You are not logged in. Register or try again.');

    return thunkAPI.rejectWithValue(newError);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/user/logout');
    clearAuthHeader();
  } catch (error) {
    const newError = { message: error.message, status: error.request.status };
    return thunkAPI.rejectWithValue(newError);
  }
});

export const updateTheme = createAsyncThunk(
  'user/theme',
  async (body, thunkAPI) => {
    try {
      const res = await axios.patch('/api/user/theme', body);

      return res.data;
    } catch (error) {
      const newError = {
        message: error.message,
        status: error.request.status,
      };
      toast.success('Something went wrong. Try later!');

      return thunkAPI.rejectWithValue(newError);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',
  async (body, thunkAPI) => {
    try {
      const res = await axios.patch('/api/user/update', body);
      return res.data;
    } catch (error) {
      const newError = {
        message: error.message,
        status: error.request.status,
      };
      toast.success('Something went wrong. Try later!');

      return thunkAPI.rejectWithValue(newError);
    }
  }
);
