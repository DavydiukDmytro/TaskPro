import { useDispatch } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const priorityArr = ['none', 'low', 'medium', 'high'];
  return (
    <>
      <div className={css.container}>
        <p>Filters</p>
        <p>Label color</p>
        <button type={'button'} onClick={() => dispatch(updateFilterValue(''))}>
          Show all
        </button>
        <ul>
          {priorityArr.map(item => (
            <li key={item}>
              <button
                type={'button'}
                onClick={() => dispatch(updateFilterValue(item))}
              >
                {item === 'none' ? 'without' : item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
