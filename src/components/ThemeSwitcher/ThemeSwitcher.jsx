import React, { useState } from 'react';
import css from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = theme => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className={css.btn} onClick={() => setIsOpen(!isOpen)}>
        Theme
      </button>
      {isOpen && (
        <ul className={css.list}>
          <li className={css.item}>
            <span onClick={() => handleOptionClick('Light')}>Light</span>
          </li>
          <li className={css.item}>
            <span onClick={() => handleOptionClick('Dark')}>Dark</span>
          </li>
          <li className={css.item}>
            <span onClick={() => handleOptionClick('Violet')}>Violet</span>
          </li>
        </ul>
      )}
    </div>
  );
};
