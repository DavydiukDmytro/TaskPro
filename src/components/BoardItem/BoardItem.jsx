import { NavLink } from 'react-router-dom';
import sprite from '../../assets/svg/symbol-defs.svg';
import css from './BoardItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'store/boards/operationsBoards';

export const BoardItem = ({ board }) => {
  const { _id, icon, title } = board;
  const dispatch = useDispatch();

  const handleDeleteBoard = async id => {
    dispatch(deleteBoard(id));
  };

  return (
    <li className={css.boardItem}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.link;
        }}
        to={`/home/${title}`}
      >
        <div className={css.box}>
          <svg width={16} height={16} stroke="currentColor" className={css.svg}>
            <use href={sprite + '#icon-colors'} />
            {/* <use href={sprite + { icon }} /> */}
          </svg>
          <p className={css.title}>{title}</p>
        </div>

        <div className={css.wrapper}>
          <button className={css.button}>
            <svg width={16} height={16} stroke="currentColor">
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </button>
          <button className={css.button} onClick={() => handleDeleteBoard(_id)}>
            <svg width={16} height={16} stroke="currentColor">
              <use href={sprite + '#icon-trash-04'} />
            </svg>
          </button>
        </div>
      </NavLink>
    </li>
  );
};
