import css from './CardItem.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'store/boards/operationsBoards';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { AddCard } from 'components/AddCard';

export const CardItem = ({ task }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const dispatch = useDispatch();
  const { title, description, priority, _id, deadline, column } = task;

  const handleEditTask = () => {
    setIsOpenModalEdit(true);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(_id));
  };

  const priorityClass = css[priority];

  return (
    <li className={`${css.card} ${priorityClass}`}>
      <h3 className={css.title}>{title}</h3>
      <p className={css.text}>{description}</p>

      <div className={css.container}>
        <div className={css.infoBox}>
          <div>
            <h4 className={css.infoTitle}>Priority</h4>
            <div className={css.priority}>
              <div className={`${css.circle} ${priorityClass}`}></div>
              <p className={css.info}>
                {priority === 'none' ? 'Without' : priority}
              </p>
            </div>
          </div>
          <div>
            <h4 className={css.infoTitle}>Deadline</h4>
            <p className={css.info}>{deadline}</p>
          </div>
        </div>
        <ul className={css.iconList}>
          <li>
            <button className={css.button}>
              <svg width={16} height={16} stroke="var( --accent-color)">
                <use href={svgSprite + '#icon-bell'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button} onClick={() => handleEditTask()}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-pencil'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button} onClick={() => handleDeleteTask()}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-trash-04'} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {isOpenModalEdit && (
        <Modal
          handleClose={() => {
            setIsOpenModalEdit(false);
          }}
        >
          <AddCard
            handleClose={() => {
              setIsOpenModalEdit(false);
            }}
            columnId={column}
            edit={task}
          />
        </Modal>
      )}
    </li>
  );
};
