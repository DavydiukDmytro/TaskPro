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

      <div>
        <h4>Priority</h4>
        <p>High</p>
      </div>
      <div>
        <h4>Deadline</h4>
        <p>12/05/2023</p>
      </div>

      <ul>
        <li>
          <button>
            <svg width={16} height={16}>
              <use href={svgSprite + '#icon-bell'} />
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg width={16} height={16}>
              <use href={svgSprite + '#icon-arrow-circle-broken-right'} />
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg width={16} height={16}>
              <use href={svgSprite + '#icon-pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg width={16} height={16}>
              <use href={svgSprite + '#icon-trash-04'} />
            </svg>
          </button>
        </li>
      </ul>
    </li>
  );
};
