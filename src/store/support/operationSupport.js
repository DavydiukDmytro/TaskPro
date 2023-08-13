import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const support = createAsyncThunk(
  'user/sendEmail',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/api/support', body);
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
