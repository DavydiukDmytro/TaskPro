import { BoardItem } from 'components/BoardItem';
import css from './BoardList.module.css';

const boards = [
  {
    id: 1,
    iconId: '#icon-container',
    title: 'Board 1',
  },
  {
    id: 2,
    iconId: '#icon-colors',
    title: 'Board 2',
  },
  {
    id: 3,
    iconId: '#icon-trash-04',
    title: 'Board 3',
  },
];

export const BoardsList = () => {
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
