export const handleFulfilledUser = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;

  state.error = null;
};

export const handlePendingUser = state => {
  state.isLoading = true;
};
export const handleRejectedUser = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledUserLogOut = state => {
  state.user = { name: null, email: null, avatarUrl: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};
