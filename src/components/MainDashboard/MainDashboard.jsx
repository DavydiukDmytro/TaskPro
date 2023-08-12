import { Button } from 'components/Button/Button';
import css from './MainDashboard.module.css';
import { CardSection } from 'components/CardSection/CardSeection';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';
import { addColumn } from 'store/boards/operationsBoards';

export const MainDashboard = ({ id }) => {
  const board = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  // const onClick = (data) => {
  //   dispatch(addColumn(data));
  // };

  return (
    <div className={css.board}>
      <ul className={css.columnList}>
        {board.map(column => (
          <li key={column._id}>
            <CardSection column={column} />
          </li>
        ))}
      </ul>
      {/* <div onClick={() => onClick({ boardId: id, title: 'NewColumn14' })}>
        Button
      </div> */}
      <div className={css.columnButton}>
        <Button
          isContrast={false}
          type={'button'}
          text={'Add another column'}
        />
      </div>
    </div>
  );
};
