export const selectDashboards = state => state.dashboard.dashboards;

export const selectColumnsForBoard = (state, boardId) => {
  const board = state.dashboard.dashboards.find(board => board._id === boardId);
  return board ? board.columns : [];
};

export const selectCurrentDashboard = state => state.dashboard.currentDashboard;