import React, { useEffect, useState } from 'react';
import { useThemeContext } from './ThemeProvider';
import icon1 from '../../assets/svg/symbol-defs.svg';
import css from './ThemeSwitcher.module.css';
import { getTheme } from 'store/user/selectorsAuth';
import { useSelector } from 'react-redux';

export const ThemeSwitcher = () => {
  const userTheme = useSelector(getTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(userTheme);
  const { handleThemeChange } = useThemeContext();
  const themes = ['light', 'dark', 'violet'];

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest(`.${css.dropdown}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={css.dropdown}>
      <button className={css.btn} onClick={() => setIsOpen(!isOpen)}>
        Theme
        {!isOpen ? (
          <svg className={css.svg} width={16} height={16}>
            <use href={icon1 + '#icon-chevron-down'} />
          </svg>
        ) : (
          <svg className={css.svg1} width={16} height={16}>
            <use href={icon1 + '#icon-chevron-up'} />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className={css.list}>
          {themes.map(theme => (
            <li
              className={`${css.item} ${
                activeTheme === theme ? css.activeItem : css.item
              }`}
              key={theme}
            >
              <span
                onClick={() => {
                  handleThemeChange(theme);
                  setActiveTheme(theme);
                }}
              >
                {theme}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
