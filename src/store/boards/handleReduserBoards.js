export const handlePendingGetBoardId = state => {
  state.isLoading = true;
  state.currentBoard = [];
};

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
  state.items.push(payload);
};

export const handleFulfilledAddColumn = (state, { payload }) => {
  const newColumn = {
    title: payload.title,
    _id: payload._id,
    tasks: [],
  };

  state.currentBoard.push(newColumn);
};

export const handleFulfilledAddTask = (state, { payload }) => {
  const columnIndex = state.currentBoard.findIndex(
    column => column._id === payload.column
  );

  if (columnIndex !== -1) {
    state.currentBoard[columnIndex].tasks.push(payload);
  }
};

export const handleFulfilledUpdate = (state, { payload }) => {
  const index = state.items.findIndex(state => state._id === payload._id);
  if (index !== -1) {
    state.items[index] = payload;
  }
};

export const handleFulfilledUpdateColumn = (state, { payload }) => {
  const index = state.currentBoard.findIndex(
    state => state._id === payload._id
  );
  if (index !== -1) {
    state.currentBoard[index].title = payload.title;
  }
};

export const handleFulfilledUpdateTask = (state, { payload }) => {
  const columnIndex = state.currentBoard.findIndex(
    column => column._id === payload.column
  );

  if (columnIndex !== -1) {
    const taskIndex = state.currentBoard[columnIndex].tasks.findIndex(
      task => task._id === payload._id
    );

    if (taskIndex !== -1) {
      state.currentBoard[columnIndex].tasks[taskIndex] = payload;
    }
  }
};

export const handleFulfilledSwapTask = (state, { payload, meta }) => {
  const columnIndex = state.currentBoard.findIndex(
    column => column._id === payload.column
  );
  state.currentBoard[columnIndex].tasks.push(payload);
  const oldColumnIndex = state.currentBoard.findIndex(
    column => column._id === meta.arg.oldColumn
  );
  const taskIndex = state.currentBoard[oldColumnIndex].tasks.findIndex(
    task => task._id === payload._id
  );
  state.currentBoard[oldColumnIndex].tasks.splice(taskIndex, 1);
};

export const handleFulfilledDelete = (state, action) => {
  const deletedId = action.meta.arg;
  const updatedItems = state.items.filter(item => item._id !== deletedId);
  return { ...state, items: updatedItems };
};

export const handleFulfilledDeleteColumn = (state, action) => {
  const deletedId = action.meta.arg;
  const updatedItems = state.currentBoard.filter(
    item => item._id !== deletedId
  );
  return { ...state, currentBoard: updatedItems };
};

export const handleFulfilledDeleteTask = (state, action) => {
  const deletedId = action.meta.arg;

  const columnIndex = state.currentBoard.findIndex(column => {
    return column.tasks.some(task => task._id === deletedId);
  });

  if (columnIndex !== -1) {
    const taskIndex = state.currentBoard[columnIndex].tasks.findIndex(
      task => task._id === deletedId
    );

    if (taskIndex !== -1) {
      state.currentBoard[columnIndex].tasks.splice(taskIndex, 1);
    }
  }
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleRejectedGetBoardById = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.currentBoard = [];
};
