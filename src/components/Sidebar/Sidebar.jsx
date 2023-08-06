import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';

export const Sidebar = () => {
  return (
    <section>
      <BoardsList />
      <ButtonLogout />
    </section>
  );
};
