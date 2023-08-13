import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from 'store/boards/operationsBoards';

export const CardSection = ({ column }) => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(
      addTask({
        title: 'task2',
        description:
          'gfut hgfu6 vjkyhrui6 futrrkjdf guyt ftudryw guytiumkhiy bjhfsd cfgdrt  vdhge vhfdyte  cfdre vhgrjht xfgsgt',
        deadline: '24/08/2023',
        columnId: column._id,
        priority: 'high',
      })
    );
  };

  const isColumn = column.tasks;
  return (
    <div className={css.cardContainer}>
      <CardTitle title={column.title} id={column._id} />
      {isColumn && <CardList tasks={column.tasks} />}
      <Button type="button" text="Add another card" action={handleAddTask} />
    </div>
  );
};
