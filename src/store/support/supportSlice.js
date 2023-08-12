import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledSupport,
  handlePendingSupport,
  handleRejectedSupport,
} from './hundleReducerSupport';
import { support } from './operationSupport';

const initialState = {
  success: false,
  isLoading: false,
  error: null,
};

const supportSlice = createSlice({
  name: 'support',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(support.fulfilled, handleFulfilledSupport)
      .addCase(support.pending, handlePendingSupport)
      .addCase(support.rejected, handleRejectedSupport);
  },
});

export const supportReducer = supportSlice.reducer;
