export const changeTheme = theme => {
  return {
    type: 'theme/changeTheme',
    payload: theme,
  };
};
