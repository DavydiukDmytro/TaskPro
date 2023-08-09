export const handleFulfilledUser = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;

  state.error = null;
};

export const handleFulfilledUserTheme = (state, { payload }) => {
  state.user.theme = payload.user.theme;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledUserUpdate = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handlePendingUser = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejectedUser = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handleFulfilledUserLogOut = state => {
  state.user = { name: null, email: null, avatarUrl: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};
