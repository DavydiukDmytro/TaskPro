import { useDispatch, useSelector } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectorsFilter';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const priorityArr = ['none', 'low', 'medium', 'high'];
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.title}>Filters</p>
        <div className={css.container}>
          <p className={css.subtitle}>Label color</p>
          <button
            className={css.filter}
            type={'button'}
            onClick={() => dispatch(updateFilterValue(''))}
          >
            Show all
          </button>
        </div>

        <ul>
          {priorityArr.map(item => (
            <li key={item}>
              <button
                className={css.priority}
                type={'button'}
                onClick={() => dispatch(updateFilterValue(item))}
              >
                <div className={`${css.circle} ${css[item]}`}></div>
                <span
                  className={`${css.text}, ${item === filter ? css.act : ''}`}
                >
                  {item === 'none' ? 'without' : item}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
