export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetAll = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledGetByID = (state, { payload }) => {
  state.currentBoard = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items.unshift(payload);
};
export const handleFulfilledAddColumn = (state, { payload }) => {
  state.currentBoard.unshift(payload);
};
export const handleFulfilledAddTask = (state, { payload }) => {
  const index = state.currentBoard.findIndex(
    column => column.id === payload.id
  );
  state.currentBoard[index].unshift(payload);
};

export const handleFulfilledUpdate = (state, { payload }) => {
  const index = state.items.findIndex(board => board.id === payload.id);
  if (index !== -1) {
    state.items[index] = payload;
  }
};

export const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(state => state.id === payload.id);
  state.items.splice(index, 1);
};

export const handleFulfilledDeleteColumn = (state, { payload }) => {
  const index = state.currentBoard.findIndex(state => state.id === payload.id);
  state.currentBoard.splice(index, 1);
};

export const handleFulfilledDeleteTask = (state, { payload }) => {
  const index = state.currentBoard.findIndex(state => state.id === payload.id);
  state.currentBoard[index].splice(index, 1);
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
