import css from './CardItem.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { Calendar } from 'components/Calendar/Calendar';

export const CardItem = ({ card }) => {
  return (
    <li className={css.card}>
      <h3 className={css.title}>The Watch Spot Design</h3>
      <p className={css.text}>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </p>

      <div className={css.container}>
        <div className={css.infoBox}>
          <div>
            <h4 className={css.infoTitle}>Priority</h4>
            <div className={css.priority}>
              <div className={css.circle}></div>
              <p className={css.info}>High</p>
            </div>
          </div>
          <div>
            <h4 className={css.infoTitle}>Deadline</h4>
            {/* <p className={css.info}>12/05/2023</p> */}
            <Calendar />
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
            <button className={css.button}>
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
