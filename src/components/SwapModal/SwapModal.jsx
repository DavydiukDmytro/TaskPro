import { useDispatch, useSelector } from 'react-redux';
import { swapTaskById } from 'store/boards/operationsBoards';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './SwapModal.module.css';

export const SwapModal = ({ handleClose, columnId, taskId }) => {
  const board = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const handleSwap = newId => {
    dispatch(swapTaskById({ _id: taskId, column: newId, oldColumn: columnId }));
    handleClose();
  };

  return (
    <>
      <div className={css.container}>
        {board.map(column => (
          <button
            className={columnId === column._id ? css.active : css.button}
            onClick={() => handleSwap(column._id)}
          >
            <span className={css.text}> {column.title}</span>
            <svg width={16} height={16} className={css.svg}>
              <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
            </svg>
          </button>
        ))}
      </div>
    </>
  );
};
