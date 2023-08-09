export const getUser = state => state.user.user;

export const getUserEmail = state => state.user.user.email;

export const getIsLogin = state => state.user.isLoggedIn;

export const getTheme = state => state.user.user.theme;

export const getIsLoading = state => state.user.isLoading;

export const getError = state => state.user.error;
