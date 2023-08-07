
import spriteIcon from '../../assets/svg/symbol-defs.svg';
import TaskProImg from '../../assets/images/plantImg/plant.png';

import css from './NeedHelp.modules.css';


export const NeedHelp = () => {
  return (

    <div className={css.wrapper}>
      <img className={css.imgWrapper}
        src={TaskProImg}
        alt="plant"
      />
      <div className={css.text}>
        If you need help with <logo>TaskPro</logo>, check out our support
        resources or reach out to our customer support team.
      </div>
      <button>
        <div className={css.icon} aria-label="icon-question">
          <use href={spriteIcon + '#icon-question'}></use>
        </div>
        <div className={css.btnTitle}>
            Need help?</div>
      </button>
    </div>
  );
};

