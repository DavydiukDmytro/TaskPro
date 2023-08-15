import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    updateFilterValue: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export const { updateFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
