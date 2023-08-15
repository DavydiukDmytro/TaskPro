import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'store/filter/selectorsFilter';

export const selectAllBoards = state => state.boards.items;

export const selectBoardsIsLoading = state => state.boards.isLoading;

export const selectErrorBoards = state => state.boards.error;

export const selectCurrentBoard = state => state.boards.currentBoard;

export const selectCurrentBoardFilter = createSelector(
  [selectCurrentBoard, selectFilter],
  (currentBoard, selectFilter) => {
    if (!currentBoard || currentBoard.length === 0) {
      return [];
    }

    if (!selectFilter || selectFilter === '') {
      return currentBoard;
    }

    const filteredTasks = currentBoard.map(column => {
      return {
        ...column,
        tasks: column.tasks.filter(task => task.priority === selectFilter),
      };
    });
    return filteredTasks;
  }
);
