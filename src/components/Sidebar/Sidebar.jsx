import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import css from './Sidebar.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';

export const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <div className={css.title__wrapp}>
        <svg>
          <use href={svgSprite + '#icon-task'} />
        </svg>
        <h1 className={css.title}>Task Pro</h1>
      </div>
      <BoardsList />
      <ButtonLogout />
    </section>
  );
};
