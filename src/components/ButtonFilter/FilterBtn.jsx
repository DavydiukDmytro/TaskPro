import css from '../ButtonFilter/FilterBtn.module.css'

import spriteIcon from '../../assets/svg/symbol-defs.svg';

export const FilterBtn = () => {


  return (
    <>
      <button className={css.filt}
        type="button">
        <div className={css.box}>
          <svg className={css.svgIcon}>
          <use href={spriteIcon + '#icon-filter'}></use>        
          </svg>
        </div>
        <div className={css.typography}>
          Filters
        </div>
      </button>
      </>
  );
};