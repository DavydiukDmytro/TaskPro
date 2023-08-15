import css from './Delete.module.css';

export const Delete = ({ handleClose, handleDelete, text }) => {
  return (
    <>
      <p className={css.text}>{text}</p>
      <div className={css.wraperr}>
        <button
          className={(css.button, css.delete)}
          type={'button'}
          onClick={() => {
            handleDelete();
          }}
        >
          Yes
        </button>
        <button
          className={(css.button, css.cancel)}
          type={'button'}
          onClick={() => {
            handleClose();
          }}
        >
          No
        </button>
      </div>
    </>
  );
};
