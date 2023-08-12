import css from './CardList.module.css';
import { CardItem } from 'components/CardItem/CardItem';


export const CardList = ({ tasks }) => {

  return (
    <ul className={css.list} >
      {tasks.map(task => (
        <CardItem key={task._id} task={task} />
      ))}
    </ul>
  );
};
