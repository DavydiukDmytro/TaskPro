import { BoardItem } from 'components/BoardItem';
import css from './BoardList.module.css';
import { useSelector } from 'react-redux';
import {
  selectAllBoards,
  selectBoardsIsLoading,
  selectErrorBoards,
} from 'store/boards/selectorsBoards';

// const boards = [
//   {
//     id: 1,
//     iconId: '#icon-container',
//     title: 'Board 1',
//   },
//   {
//     id: 2,
//     iconId: '#icon-colors',
//     title: 'Board 2',
//   },
//   {
//     id: 3,
//     iconId: '#icon-trash-04',
//     title: 'Board 3',
//   },
// ];

export const BoardsList = () => {
  const boards = useSelector(selectAllBoards);
  // const isLoading = useSelector(selectBoardsIsLoading);
  // // const error = useSelector(selectErrorBoards);

  console.log(boards);
  // console.log(boards.title);

  return (
    <ul className={css.list}>
      {boards.map(board => (
        <BoardItem
          key={board.id}
          icon={`icon-sprite-class-${board.iconId}`}
          title={board.title}
        />
      ))}
    </ul>
  );
};
