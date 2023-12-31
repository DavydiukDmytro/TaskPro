import css from './CardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/boards/operationsBoards';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { EditColumn } from 'components/EditColumn';
import { Delete } from 'components/Delete';

export const CardTitle = ({ title, id }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  const handleEditColumn = () => {
    setIsOpenModal(true);
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(id));
  };

  return (
    <>
      <div className={css.cardTitle}>
        <h2>{title}</h2>
        <ul className={css.iconList}>
          <li>
            <button className={css.button} onClick={() => handleEditColumn()}>
              <svg width={16} height={16} stroke="var(--primary-text-color)">
                <use href={svgSprite + '#icon-pencil'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button} onClick={() => setIsDelete(true)}>
              <svg width={16} height={16} stroke="var(--primary-text-color)">
                <use href={svgSprite + '#icon-trash-04'} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {isDelete && (
        <Modal>
          <Delete
            handleClose={() => setIsDelete(false)}
            handleDelete={() => handleDeleteColumn()}
            text={'You really want to remove the column with all the cards?'}
          />
        </Modal>
      )}
      {isOpenModal && (
        <Modal
          handleClose={() => {
            setIsOpenModal(false);
          }}
        >
          <EditColumn
            handleClose={() => {
              setIsOpenModal(false);
            }}
            id={id}
            title={title}
          />
        </Modal>
      )}
    </>
  );
};
