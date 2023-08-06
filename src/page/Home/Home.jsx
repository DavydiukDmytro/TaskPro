
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { UserInfo } from 'components/UserInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <header>
        <button>open sidebar</button>
        <ThemeSwitcher />
        <UserInfo />
      </header>
      <main>
        <Suspense fallback={<p>DDDD</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Sidebar />
    </>
  );
};
