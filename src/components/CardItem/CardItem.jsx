import css from './CardItem.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const CardItem = () => {
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
        <div className={css.info__box}>
          <div>
            <h4 className={css.info__title}>Priority</h4>
            <p className={css.info}>High</p>
          </div>
          <div>
            <h4 className={css.info__title}>Deadline</h4>
            <p className={css.info}>12/05/2023</p>
          </div>
        </div>
        <ul className={css.icon__list}>
          <li>
            <button className={css.button}>
              <svg width={16} height={16}>
                <use href={svgSprite + '#icon-bell'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16}>
                <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16}>
                <use href={svgSprite + '#icon-pencil'} />
              </svg>
            </button>
          </li>
          <li>
            <button className={css.button}>
              <svg width={16} height={16}>
                <use href={svgSprite + '#icon-trash-04'} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};
