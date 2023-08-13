import css from './CardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateColumnById } from 'store/boards/operationsBoards';

export const CardTitle = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleEditColumn = () => {
    dispatch(updateColumnById({ id, title: 'Edit column2' }));
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(id));
  };
  // 64d88ed82c61c44e750ee955

  return (
    <div className={css.cardTitle}>
      <h2>{title}</h2>
      <ul className={css.iconList}>
        <li>
          <button className={css.button} onClick={() => handleEditColumn()}>
            <svg width={16} height={16} stroke="var(--primary-text-color)">
              <use href={svgSprite + '#icon-pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => handleDeleteColumn()}>
            <svg width={16} height={16} stroke="var(--primary-text-color)">
              <use href={svgSprite + '#icon-trash-04'} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
