import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';

export const CardSection = () => {
  return (
    <li className={css.cardContainer}>
      <CardTitle title="To do" />
      <CardList />
      <Button type="button" text="Add another card" />
    </li>
  );
};
