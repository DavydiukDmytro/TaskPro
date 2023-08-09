import { Sidebar } from 'components/Sidebar/Sidebar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { UserInfo } from '../../components/UserInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ScreensPage } from 'page/ScreensPage';

export const Home = () => {
  return (
    <>
      <Header />
      <ScreensPage />
      <main>
        <Suspense fallback={<p>DDDD</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Sidebar />
    </>
  );
};
