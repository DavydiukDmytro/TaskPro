import css from './CardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateColumnById } from 'store/boards/operationsBoards';

export const CardTitle = ({ title, id }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteColumn(id));
  };

  const onUpdate = async () => {
  
    await dispatch(updateColumnById({ id, title: 'NewColumn22' }));
  };

  return (
    <div className={css.cardTitle}>
      <h2>{title}</h2>
      <ul className={css.iconList}>
        <li>
          <button className={css.button}>
            <svg
              width={16}
              height={16}
              stroke="var(--primary-text-color)"
              onClick={()=>onUpdate()}
            >
              <use href={svgSprite + '#icon-pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => onDelete(id)}>
            <svg width={16} height={16} stroke="var(--primary-text-color)">
              <use href={svgSprite + '#icon-trash-04'} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
