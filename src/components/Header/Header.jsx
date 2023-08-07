import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import css from './Header.module.css';
import { UserInfo } from 'components/UserInfo';


export const Header = () => {
  return (
    <header className={css.header}>


      <ThemeSwitcher />
      <UserInfo />
    </header>
  );
};
