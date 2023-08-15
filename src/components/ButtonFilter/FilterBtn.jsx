import css from '../ButtonFilter/FilterBtn.module.css';
import spriteIcon from '../../assets/svg/symbol-defs.svg';
import { useState } from 'react';
import { Filter } from 'components/Filter';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const FilterBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        className={css.filt}
        type="button"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <div className={css.box}>
          <svg className={css.svgIcon}>
            <use href={spriteIcon + '#icon-filter'}></use>
          </svg>
        </div>
        <div className={css.typography}>Filters</div>
      </button>
      {isOpenModal && (
        <div className={css.wrapperPriopity}>
          <button
            onClick={() => {
              setIsOpenModal(false);
            }}
            className={css.close}
          >
            <svg width={18} height={18} stroke="var(--primary-text-color)">
              <use className={css.svg} href={svgSprite + '#icon-x-close'} />
            </svg>
          </button>
          <Filter />
        </div>
      )}
    </>
  );
};
