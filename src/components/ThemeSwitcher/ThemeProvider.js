import { useTheme } from 'hooks/useTheme';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from 'store/user/selectorsAuth';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const userTheme = useSelector(getTheme);

  const [currentTheme, setCurrentTheme] = useState(userTheme);
  const { theme, setTheme: setThemeHook } = useTheme();
  console.log(theme);

  useEffect(() => {
    setCurrentTheme(userTheme);
  }, [userTheme]);

  const handleThemeChange = theme => {
    if (theme === 'light' || theme === 'violet' || theme === 'dark') {
      setThemeHook(theme);
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
