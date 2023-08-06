import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import css from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <BoardsList />
      <ButtonLogout />
    </section>
  );
};
