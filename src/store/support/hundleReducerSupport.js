export const handleFulfilledSupport = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.success = true;
};

export const handleRejectedSupport = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
  state.success = false;
};

export const handlePendingSupport = (state, { payload }) => {
  state.isLoading = true;
  state.success = false;
  state.error = null;
};
