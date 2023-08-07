import { useLayoutEffect, useState } from 'react';

export const useTheme = initialTheme => {
  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', [theme]);
  }, [theme]);

  return { theme, setTheme };
};
