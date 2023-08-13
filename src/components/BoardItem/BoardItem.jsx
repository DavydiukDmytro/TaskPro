import { NavLink } from 'react-router-dom';
import sprite from '../../assets/svg/symbol-defs.svg';
import css from './BoardItem.module.css';
import { deleteBoard } from 'store/boards/operationsBoards';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { NewBoard } from 'components/NewBoard';
import { useDispatch } from 'react-redux';

export const BoardItem = ({ board }) => {
  const [isEditBoard, setIsEditBoard] = useState(false);
  const { _id, icon, title, background } = board;
  const dispatch = useDispatch();

  const handleDeleteBoard = id => {
    dispatch(deleteBoard(id));
  };
  const handleEditBoard = () => {
    setIsEditBoard(true);
  };

  return (
    <li className={css.boardItem}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.link;
        }}
        to={`/home/${board._id}`}
      >
        <div className={css.box}>
          <svg width={16} height={16} stroke="currentColor" className={css.svg}>
            <use href={sprite + `#icon-${icon}`} />
          </svg>
          <p className={css.title}>{title}</p>
        </div>

        <div className={css.wrapper}>
          <button className={css.button} onClick={() => handleEditBoard()}>
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
      {isEditBoard && (
        <Modal
          handleClose={() => {
            setIsEditBoard(false);
          }}
        >
          <NewBoard
            handleClose={() => {
              setIsEditBoard(false);
            }}
            edit={true}
            title={title}
            icon={icon}
            background={background}
            id={_id}
          />
        </Modal>
      )}
    </li>
  );
};
