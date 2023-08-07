import { useTheme } from 'hooks/useTheme';
import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from 'store/user/operationAuth';
import { getTheme } from 'store/user/selectorsAuth';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const userTheme = useSelector(getTheme);

  // const [currentTheme, setCurrentTheme] = useState(userTheme);
  const { setTheme } = useTheme(userTheme);
  console.log(userTheme);

  useEffect(() => {
    setTheme(userTheme);
  }, [setTheme, userTheme]);

  const handleThemeChange = theme => {
    if (theme === 'light' || theme === 'violet' || theme === 'dark') {
      dispatch(updateTheme({ theme }));
      setTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ userTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
