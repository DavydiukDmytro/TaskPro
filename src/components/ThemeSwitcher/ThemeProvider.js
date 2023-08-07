import { useTheme } from 'hooks/useTheme';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'store/user/actions';
import { getTheme } from 'store/user/selectorsAuth';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const userTheme = useSelector(getTheme);

  const [currentTheme, setCurrentTheme] = useState(userTheme);
  const { setTheme } = useTheme(userTheme);
  console.log(userTheme);

  useEffect(() => {
    dispatch(changeTheme(currentTheme));
  }, [dispatch, currentTheme]);

  const handleThemeChange = theme => {
    if (theme === 'light' || theme === 'violet' || theme === 'dark') {
      setCurrentTheme(theme);
      dispatch(changeTheme(theme));
      setTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
