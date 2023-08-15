import { useDispatch, useSelector } from 'react-redux';
import { swapTaskById } from 'store/boards/operationsBoards';
import { selectCurrentBoardFilter } from 'store/boards/selectorsBoards';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const SwapModal = ({ handleClose, columnId, taskId }) => {
  const board = useSelector(selectCurrentBoardFilter);
  const dispatch = useDispatch();
  const handleSwap = newId => {
    dispatch(swapTaskById({ _id: taskId, column: newId, oldColumn: columnId }));
    handleClose();
  };

  return (
    <>
      {board.map(column => (
        <button
          className={columnId === column._id ? 'active' : ''}
          onClick={() => handleSwap(column._id)}
        >
          {column.title}
          <svg width={16} height={16} stroke="currentColor">
            <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
          </svg>
        </button>
      ))}
    </>
  );
};
