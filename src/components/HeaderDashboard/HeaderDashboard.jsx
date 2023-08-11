import css from './HeaderDashboard.module.css';

export const HeaderDashboard = ({title}) => {
  return (
    <div className={css.boardHeader}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.title}>Filters</p>
    </div>
  );
};
