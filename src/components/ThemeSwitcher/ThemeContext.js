import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    createTheme({ palette: { mode: 'dark' } })
  );

  const handleThemeChange = theme => {
    let paletteBackgroundDefault = '#151515';

    if (theme === 'light') {
      paletteBackgroundDefault = '#fcfcfc';
    } else if (theme === 'violet') {
      paletteBackgroundDefault = '#ecedfd';
    }

    const newTheme = createTheme({
      palette: {
        mode: theme,
        background: {
          default: paletteBackgroundDefault,
          primary: paletteBackgroundDefault,
        },
      },
    });

    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
