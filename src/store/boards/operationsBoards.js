import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro.onrender.com';

export const getAllBoards = createAsyncThunk(
  'board/getAllBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/board/');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardByID = createAsyncThunk(
  'board/getBoardByID',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/board/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'board/addBoard',
  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/board', board);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  async ({ _id, title, icon, background }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/board/${_id}`, {
        title,
        icon,
        background,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'board/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/board/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
