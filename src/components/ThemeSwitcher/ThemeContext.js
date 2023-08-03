import { useTheme } from 'hooks/useTheme';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = theme => {
    if (theme === 'light') {
      setTheme('light');
    } else if (theme === 'violet') {
      setTheme('violet');
    } else if (theme === 'dark') {
      setTheme('dark');
    }

    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
