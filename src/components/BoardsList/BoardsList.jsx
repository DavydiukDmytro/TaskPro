import { BoardItem } from 'components/BoardItem';
import css from './BoardList.module.css';
import { useSelector } from 'react-redux';
import { selectAllBoards } from 'store/boards/selectorsBoards';

export const BoardsList = () => {
  const boards = useSelector(selectAllBoards);
  // const isLoading = useSelector(selectBoardsIsLoading);
  // const error = useSelector(selectErrorBoards);

  return (
      <ul className={css.list}>
        {boards.map(board => (
          <BoardItem key={board._id} board={board} />
        ))}
      </ul>
  );
};
