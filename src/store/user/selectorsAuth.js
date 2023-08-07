export const getUser = state => state.user.user;

export const getUserEmail = state => state.user.user.email;

export const getIsLoggin = state => state.user.isLoggedIn;

export const getTheme = state => state.user.theme;

export const getIsLoading = state => state.auth.isLoading;

export const getError = state => state.auth.error;
