import { NavLink } from 'react-router-dom';
import sprite from '../../assets/svg/symbol-defs.svg';
import css from './BoardItem.module.css';

export const BoardItem = ({ icon, title }) => {
  return (
    <li className={css.boardItem}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.link;
        }}
      >
        <svg width={16} height={16} stroke="currentColor" className={css.svg}>
          <use href={sprite + '#icon-pazzle'} />
          {/* <use href={sprite + { icon }} /> */}
        </svg>
        <p>Project office{title}</p>

        <div className={css.wrapper}>
          <button className={css.button}>
            <svg width={16} height={16} stroke="currentColor">
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </button>
          <button className={css.button}>
            <svg width={16} height={16} stroke="currentColor">
              <use href={sprite + '#icon-trash-04'} />
            </svg>
          </button>
        </div>
      </NavLink>
    </li>
  );
};
