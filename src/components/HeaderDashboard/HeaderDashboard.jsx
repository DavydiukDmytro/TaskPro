import css from './HeaderDashboard.module.css';
import { FilterBtn } from '../ButtonFilter/FilterBtn';
import { useSelector } from 'react-redux';
import { selectFilter } from 'store/filter/selectorsFilter';

export const HeaderDashboard = ({ title }) => {
  const filter = useSelector(selectFilter);
  return (
    <div className={css.boardHeader}>
      <h1 className={css.title}>{title}</h1>
      <div className={`${css.title} ${css[filter]}`}>
        <FilterBtn />
      </div>
    </div>
  );
};
