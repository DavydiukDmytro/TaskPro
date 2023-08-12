import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';

export const CardSection = ({ column }) => {
  const isColumn = column.tasks.length > 0;
  return (
    <div className={css.cardContainer}>
      <CardTitle title={column.title} id={column._id} />
      {isColumn && <CardList tasks={column.tasks} />}
      <Button type="button" text="Add another card" />
    </div>
  );
};
