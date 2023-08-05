import css from './CardList.module.css';
import { CardItem } from 'components/CardItem/CardItem';

export const CardList = () => {
  return (
    <ul className={css.list}>
      <CardItem />
      <CardItem />
      <CardItem />
    </ul>
  );
};
