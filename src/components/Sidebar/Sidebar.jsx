import { BoardsList } from 'components/BoardsList';
import { ButtonLogout } from 'components/ButtonLogout';
import css from './Sidebar.module.css';
// import svgSprite from '../../assets/svg/symbol-defs.svg';
import { BoardTitle } from 'components/BoardTitle/BoardTitle';
import { NeedHelp } from 'components/NeedHelp/NeedHelp';
import { Logo } from 'components/Logo/Logo';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useState } from 'react';

export const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = e => {
    const data = e.target.getAttribute('data-action');
    console.log(data);
    if (data === 'open' || data === 'close') {
      setSidebarVisible(!isSidebarVisible);
    }
    // console.log(e.target.getAttribute('data-action'));
    return;
  };
  return (
    <>
      {!isSidebarVisible && (
        <button className={css.button} onClick={toggleSidebar}>
          <svg
            width={32}
            height={32}
            stroke="currentColor"
            className={css.icon}
            data-action="open"
          >
            <use href={svgSprite + '#icon-menu'} />
          </svg>
        </button>
      )}

      <div
        className={
          !isSidebarVisible ? css.wrapper : `${css.wrapper} ${css.isOpen}`
        }
        onClick={toggleSidebar}
        data-action="close"
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
