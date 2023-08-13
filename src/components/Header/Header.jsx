import css from './Header.module.css';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { UserInfo } from 'components/UserInfo';
import { EditColumn } from 'components/EditColumn';

export const Header = () => {
  return (
    <header className={css.header}>
      <EditColumn />
      <ThemeSwitcher />
      <UserInfo />
    </header>
  );
};
