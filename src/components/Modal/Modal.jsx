import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

const modalRoot = document.getElementById('modal-root');

// приймаэ пропси handleClose = функція закриття. Якщо функція є то в модалкі буде хрестик для закриття якщо не буде функції хрестика не буде

export const Modal = ({ handleClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modalContainer}>
        {handleClose && (
          <button
            onClick={() => {
              handleClose();
            }}
            className={css.close}
          >
            <svg width={18} height={18}>
              <use className={css.svg} href={svgSprite + '#icon-x-close'} />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>,
    modalRoot
  );
};
