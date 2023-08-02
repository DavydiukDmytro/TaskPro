import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children }) => {
  return createPortal(<></>, modalRoot);
};
