import css from './CardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const CardTitle = ({ title }) => {
  return (
    <div className={css.cardTitle}>
      <h2>{title}</h2>
      <ul className={css.iconList}>
        <li>
          <button className={css.button}>
            <svg width={16} height={16} stroke="currentColor">
              <use href={svgSprite + '#icon-pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button className={css.button}>
            <svg width={16} height={16} stroke="var( --accent-color)">
              <use href={svgSprite + '#icon-trash-04'} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
