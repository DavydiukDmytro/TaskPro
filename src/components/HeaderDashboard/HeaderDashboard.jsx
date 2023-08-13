import css from './HeaderDashboard.module.css';
import {FilterBtn} from '../ButtonFilter/FilterBtn'

export const HeaderDashboard = ({title}) => {
  return (
    <div className={css.boardHeader}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.title}>
      <FilterBtn/>
      </p>
    </div>
  );
};
