import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import css from './Sidebar.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { BoardTitle } from 'components/BoardTitle/BoardTitle';

export const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <div className={css.logoWrapp}>
        <svg width={32} height={32} className={css.logoSvg}>
          <use href={svgSprite + '#icon-task'} />
        </svg>
        <h1 className={css.logo}>Task Pro</h1>
      </div>
      <BoardTitle />
      <BoardsList />

      <ButtonLogout />
    </section>
  );
};
