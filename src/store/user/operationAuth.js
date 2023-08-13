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
  'user/registration',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/api/user/registration', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const newError = {
        status: error.request.status,
      };
      if (error.response.data.message) {
        newError.message = error.response.data.message;
      } else {
        newError.message = error.message;
      }
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
      status: error.request.status,
    };
    if (error.response.data.message) {
      newError.message = error.response.data.message;
    } else {
      newError.message = error.message;
    }
    return thunkAPI.rejectWithValue(newError);
  }
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/user/logout');
    clearAuthHeader();
  } catch (error) {
    const newError = {
      status: error.request.status,
    };
    if (error.response.data.message) {
      newError.message = error.response.data.message;
    } else {
      newError.message = error.message;
    }
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
        status: error.request.status,
      };
      if (error.response.data.message) {
        newError.message = error.response.data.message;
      } else {
        newError.message = error.message;
      }
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
        status: error.request.status,
      };
      if (error.response.data.message) {
        newError.message = error.response.data.message;
      } else {
        newError.message = error.message;
      }
      return thunkAPI.rejectWithValue(newError);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/user/current');
      return res.data;
    } catch (error) {
      const newError = {
        status: error.request.status,
      };
      if (error.response.data.message) {
        newError.message = error.response.data.message;
      } else {
        newError.message = error.message;
      }
      return thunkAPI.rejectWithValue(newError);
    }
  }
);
