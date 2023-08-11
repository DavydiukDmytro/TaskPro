import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro.onrender.com';

export const getAllBoards = createAsyncThunk(
  'boards/getAllBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/board');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardByID = createAsyncThunk(
  'boards/getBoardByID',
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
  'boards/addBoard',
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
  'boards/updateBoard',
  async ({ id, title, icon, background }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/board/${id}`, {
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
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/board/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getColumns = createAsyncThunk(
//   'boards/getColumns',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/api/column');
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async (column, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/column', column);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/column/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumnById = createAsyncThunk(
  'boards/updateColumnById ',
  async ({ id, title }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/column/${id}`, { title });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getTask = createAsyncThunk(
//   'boards/getTask',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/api/task');
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addTask = createAsyncThunk(
  'boards/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/task', task);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'boards/deleteTask',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/task/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskById = createAsyncThunk(
  'boards/pdateTaskById ',
  async (id, task, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/column/${id}`, task);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
