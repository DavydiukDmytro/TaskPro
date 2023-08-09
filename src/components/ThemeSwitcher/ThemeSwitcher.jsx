import React, { useState } from 'react';
import { useThemeContext } from './ThemeProvider';
import css from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleThemeChange } = useThemeContext();
  const themes = ['light', 'dark', 'violet'];

  return (
    <div className={css.dropdown}>
      <button className={css.btn} onClick={() => setIsOpen(!isOpen)}>
        Theme
      </button>
      {isOpen && (
        <ul className={css.list}>
          {themes.map(theme => (
            <li className={css.item} key={theme}>
              <span onClick={() => handleThemeChange(theme)}>{theme}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
