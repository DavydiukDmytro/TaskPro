import { useState } from 'react';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import css from './Sidebar.module.css';
import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import { BoardTitle } from 'components/BoardTitle/BoardTitle';
import { NeedHelp } from 'components/NeedHelp/NeedHelp';
import { Logo } from 'components/Logo/Logo';

export const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = e => {
    const data = e.target.getAttribute('data-action');
    if (!data) return;
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {!isSidebarVisible && (
        <button className={css.button} onClick={toggleSidebar} data-action>
          <svg
            width={32}
            height={32}
            stroke="currentColor"
            className={css.icon}
            data-action
          >
            <use href={svgSprite + '#icon-menu'} data-action />
          </svg>
        </button>
      )}

      <div
        className={
          !isSidebarVisible ? css.wrapper : `${css.wrapper} ${css.isOpen}`
        }
        onClick={toggleSidebar}
        data-action
      >
        <section className={css.sidebar}>
          <div>
            <Logo />
            <BoardTitle />
            <BoardsList />
          </div>

          <div className={css.container}>
            <NeedHelp />
            <ButtonLogout />
          </div>
        </section>
      </div>
    </>
  );
};
