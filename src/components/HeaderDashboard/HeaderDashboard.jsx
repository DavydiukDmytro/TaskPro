import { Calendar } from 'components/Calendar/Calendar';
import css from './HeaderDashboard.module.css';

export const HeaderDashboard = () => {
  return (
    <div className={css.boardHeader}>
      <h1 className={css.title}>Project office</h1>
      <p className={css.title}>Filters</p>
    </div>
  );
};
