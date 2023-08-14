import { Button } from 'components/Button/Button';
import css from './MainDashboard.module.css';
import { CardSection } from 'components/CardSection/CardSeection';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';
import { useDispatch } from 'react-redux';
import { addColumn } from 'store/boards/operationsBoards';

export const MainDashboard = ({ id }) => {
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);

  const handleAddСolumn = async () => {
    await dispatch(addColumn({ title: 'Column6', boardId: id }));
  };

  return (
    <div className={css.board}>
      {board.length > 0 && (
        <ul className={css.columnList}>
          {board.map(column => (
            <li key={column._id}>
              <CardSection column={column} />
            </li>
          ))}
        </ul>
      )}

      <div className={css.columnButton}>
        <Button
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddСolumn}
        />
      </div>
    </div>
  );
};
