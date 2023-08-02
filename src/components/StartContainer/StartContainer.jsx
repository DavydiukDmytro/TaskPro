import css from './StartContainer.module.css';

export const StartContainer = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapp}>{children}</div>
    </div>
  );
};
