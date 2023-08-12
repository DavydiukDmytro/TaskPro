import spriteIcon from '../../assets/svg/symbol-defs.svg';
import TaskProImg from '../../assets/images/plantImg/plant.png';

import css from '../NeedHelp/NeedHelp.module.css';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { ModalNeedHelp } from 'components/ModalNeedHelp';

export const NeedHelp = () => {
  const [isMoadal, setIsMoadal] = useState(false);
  return (
    <>
      <div className={css.wrapper}>
        <img className={css.imgWrapper} src={TaskProImg} alt="plant" />
        <div className={css.text}>
          If you need help with <span className={css.logo}>TaskPro</span>, check
          out our support resources or reach out to our customer support team.
        </div>
        <button
          onClick={() => {
            setIsMoadal(true);
          }}
          className={css.button}
        >
          <svg
            className={css.icon}
            aria-label="icon-question"
            width="18"
            height="18"
          >
            <use href={spriteIcon + '#icon-question'}></use>
          </svg>

          <div className={css.btnTitle}>Need help?</div>
        </button>
      </div>
      {isMoadal && (
        <Modal
          handleClose={() => {
            setIsMoadal(false);
          }}
        >
          <ModalNeedHelp
            handleClose={() => {
              setIsMoadal(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
