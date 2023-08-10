import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardByID,
  addBoard,
  updateBoard,
  deleteBoard,
} from './operationsBoards';

import {
  handlePending,
  handleFulfilled,
  handleFulfilledGetAll,
  handleFulfilledGetByID,
  handleFulfilledAdd,
  handleFulfilledUpdate,
  handleFulfilledDelete,
  handleRejected,
} from './handleReduserBoards';

export const initialBoards = {
 items: [],
  isLoading: false,
  error: null,
};

const arrThunks = [
  getAllBoards,
  getBoardByID,
  addBoard,
  updateBoard,
  deleteBoard,
];

const getAction = type => arrThunks.map(el => el[type]);

const boardsSlice = createSlice({
  name: 'boards',
  initialState: initialBoards,
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, handleFulfilledGetAll)
      .addCase(getBoardByID.fulfilled, handleFulfilledGetByID)
      .addCase(addBoard.fulfilled, handleFulfilledAdd)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdate)
      .addCase(deleteBoard.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected),
});

export const boardsReduser = boardsSlice.reducer;
