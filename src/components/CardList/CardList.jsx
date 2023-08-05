import css from './CardList.module.css';
import { CardItem } from 'components/CardItem/CardItem';

export const CardList = () => {
  return (
    <ul className={css.list}>
      <CardItem card={{ priority: 'low' }} />
      <CardItem card={{ priority: 'medium' }} />
      <CardItem card={{ priority: 'high' }} />
      <CardItem card={{ priority: 'low' }} />
      <CardItem card={{ priority: 'medium' }} />
      <CardItem card={{ priority: 'high' }} />
      <CardItem />
    </ul>
  );
};
