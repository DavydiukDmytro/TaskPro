import { useDispatch, useSelector } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectorsFilter';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') {
      throw new Error('Input should be a string');
    }

    if (str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
                <div
                  className={`${css.circle} ${
                    item === filter ? css.actCircle : css.teadwawdxt
                  } ${css[item]}`}
                ></div>
                <span className={item === filter ? css.act : css.text}>
                  {item === 'none' ? 'Without' : capitalizeFirstLetter(item)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
