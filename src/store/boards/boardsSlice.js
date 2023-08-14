import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardByID,
  addBoard,
  addColumn,
  addTask,
  updateBoard,
  updateColumnById,
  updateTaskById,
  deleteBoard,
  deleteColumn,
  deleteTask,
} from './operationsBoards';

import {
  handlePending,
  handleFulfilled,
  handleFulfilledGetAll,
  handleFulfilledGetByID,
  handleFulfilledAdd,
  handleFulfilledAddColumn,
  handleFulfilledAddTask,
  handleFulfilledUpdate,
  handleFulfilledUpdateColumn,
  handleFulfilledUpdateTask,
  handleFulfilledDelete,
  handleFulfilledDeleteColumn,
  handleFulfilledDeleteTask,
  handleRejected,
  handleRejectedGetBoardById,
  handlePendingGetBoardId,
} from './handleReduserBoards';

export const initialBoards = {
  items: [],
  currentBoard: [],
  isLoading: false,
  error: null,
};

const arrThunks = [
  getAllBoards,
  addBoard,
  addColumn,
  addTask,
  updateBoard,
  updateColumnById,
  updateTaskById,
  deleteBoard,
  deleteColumn,
  deleteTask,
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
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(addTask.fulfilled, handleFulfilledAddTask)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdate)
      .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumn)
      .addCase(updateTaskById.fulfilled, handleFulfilledUpdateTask)
      .addCase(deleteBoard.fulfilled, handleFulfilledDelete)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(deleteTask.fulfilled, handleFulfilledDeleteTask)
      .addCase(getBoardByID.pending, handlePendingGetBoardId)
      .addCase(getBoardByID.rejected, handleRejectedGetBoardById)
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected),
});

export const boardsReduser = boardsSlice.reducer;
