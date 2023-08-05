import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';

export const CardSection = () => {
  return (
    <div className={css.cardContainer}>
      {/* <Button type="button" isContrast={false} text="Add another column" /> */}
      <CardTitle title="To do" />
      <CardList />
      <Button type="button"  text="Add another card" />
    </div>
  );
};
