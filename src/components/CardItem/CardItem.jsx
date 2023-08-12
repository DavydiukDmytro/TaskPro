import css from './CardItem.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
// import { Calendar } from 'components/Calendar/Calendar';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskById } from 'store/boards/operationsBoards';

export const CardItem = ({ task }) => {
  const { title, description, priority, deadline, _id, column } = task;
  const dispatch = useDispatch();

const data = {
  title: 'NTask2',
  description:
    'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
  priority: 'low',
  deadline: '12/12/2023',
  columnId: column._id,
};
  const onclick = () => {
    dispatch(updateTaskById(_id, data));
  }

  return (
    <li className={css.card}>
      <h3 className={css.title}>{title}</h3>
      <p className={css.text}>{description}</p>

      <div className={css.container}>
        <div className={css.infoBox}>
          <div>
            <h4 className={css.infoTitle}>Priority</h4>
            <div className={css.priority}>
              <div className={css.circle}></div>
              <p className={css.info}>{priority}</p>
            </div>
          </div>
          <div>
            <h4 className={css.infoTitle}>Deadline</h4>
            <p className={css.info}>{deadline}</p>
            {/* <Calendar /> */}
          </div>
        </div>
        <ul className={css.iconList}>
          <li>
            <button className={css.button}>
              <svg width={16} height={16} stroke="var( --accent-color)">
                <use href={svgSprite + '#icon-bell'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button} onClick={()=>onclick()}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-pencil'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16} stroke="currentColor">
                <use href={svgSprite + '#icon-trash-04'} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};
