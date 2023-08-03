import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchUserDashboards = createAsyncThunk(
  'dashboards/fetchUserDashboards',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/boards');
      return resp.data.boards;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const addUserBoard = createAsyncThunk(
  'dashboards/addUserBoard',
  async (board, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/boards', board);
      return resp.data.board;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const updateUserBoard = createAsyncThunk(
  'dashboards/editUserBoard',
  async ({ boardId, board }, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/boards/${boardId}`, board);
      return resp.data.board;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const deleteUserBoard = createAsyncThunk(
  'dashboards/deleteUserBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/boards/${boardId}`);
      return resp.data.board;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const addColumn = createAsyncThunk(
  'dashboards/createColumn',
  async ({ boardId, title }, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`/boards/${boardId}/columns`, { title });
      return resp.data.column;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const getColumnsForBoard = createAsyncThunk(
  'dashboards/getColumnsForBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`/boards/${boardId}/columns`);
      return resp.data.columns;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const updateColumn = createAsyncThunk(
  'dashboards/updateColumn',
  async ({ boardId, columnId, title }, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/boards/${boardId}/columns/${columnId}`, {
        title,
      });
      return resp.data.column;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'dashboards/editColumn',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/boards/${boardId}/columns/${columnId}`);
      return resp.data.column;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.message); 
    }
  }
);