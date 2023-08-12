import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ScreensPage } from 'page/ScreensPage';
import { Message } from 'components/Message';
import { useSelector } from 'react-redux';
import { getIsSuccesSupport } from '../../store/support/selectorsSupport';

export const Home = () => {
  // const IsSucces = useSelector(getIsSuccesSupport());
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
      {/* <Message />
      {IsSucces && <Message success={true} textMessage={'Request accepted'} />} */}
    </>
  );
};
