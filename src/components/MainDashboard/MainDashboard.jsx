import css from './MainDashboard.module.css';

export const MainDashboard = ({ children }) => {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Project office</h1>
      <div className={css.board}>{children}</div>
    </main>
  );
};
