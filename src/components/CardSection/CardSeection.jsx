import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from 'store/boards/operationsBoards';

export const CardSection = ({ column }) => {
  const isColumn = column.tasks.length > 0;
  const dispatch = useDispatch();

  const onclick = () => {
    dispatch(
      addTask({
        title: 'NTask2',
        description:
          'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        priority: 'low',
        deadline: '12/12/2023',
        columnId: column._id,
      })
    );
  };

  return (
    <div className={css.cardContainer}>
      <button onClick={onclick}>Add</button>
      <CardTitle title={column.title} id={column._id} />
      {isColumn && <CardList tasks={column.tasks} />}
      <Button type="button" text="Add another card" />
    </div>
  );
};
