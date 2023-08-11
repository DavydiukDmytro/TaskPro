import css from './CardList.module.css';
import { CardItem } from 'components/CardItem/CardItem';


export const CardList = ({ tasks }) => {
    const maxHeight = `calc(100vh - 180px)`;

  return (
    <ul className={css.list} style={{ maxHeight }}>
      {tasks.map(task => (
        <CardItem key={task._id} task={task} />
      ))}
    </ul>
  );
};
