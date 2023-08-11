import { Button } from 'components/Button/Button';
import css from './MainDashboard.module.css';
import { CardSection } from 'components/CardSection/CardSeection';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';

export const MainDashboard = () => {
  const board = useSelector(selectCurrentBoard);

  return (
    <div className={css.board}>
      <ul className={css.columnList}>
        {board.map(column => (
          <li key={column._id}>
            <CardSection column={column} />
          </li>
        ))}
        {/* <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li>
        <li>
          <CardSection />
        </li> */}
      </ul>

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
