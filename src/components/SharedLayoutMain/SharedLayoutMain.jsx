import { Loader } from 'components/Loader';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { UserInfo } from 'components/UserInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayoutMain = () => {
  return (
    <>
      <header>
        <button>open sidebar</button>
        <ThemeSwitcher />
        <UserInfo />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayoutMain;
