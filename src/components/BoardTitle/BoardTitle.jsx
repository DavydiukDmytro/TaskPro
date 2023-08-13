import css from './BoardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { Modal } from 'components/Modal';
import { NewBoard } from 'components/NewBoard';
import { useState } from 'react';

export const BoardTitle = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const handleAddBoard = () => {
    setIsOpenModalAdd(true);
  };

  return (
    <>
      <div className={css.wrapper}>
        <h2 className={css.title}>My boards</h2>
        <div className={css.container}>
          <p className={css.text}>Create a new board</p>
          <button className={css.button} onClick={() => handleAddBoard()}>
            <svg width={20} height={20} className={css.icon}>
              <use href={svgSprite + '#icon-plus'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpenModalAdd && (
        <Modal
          handleClose={() => {
            setIsOpenModalAdd(false);
          }}
        >
          <NewBoard
            handleClose={() => {
              setIsOpenModalAdd(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
