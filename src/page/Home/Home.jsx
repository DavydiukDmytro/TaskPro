import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ScreensPage } from 'page/ScreensPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from 'store/boards/operationsBoards';
import { selectAllBoards } from 'store/boards/selectorsBoards';
import BlankPage from 'page/BlankPage/BlankPage';

export const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const isBoards = boards.length > 0;

  return (
    <>
      <Header />
      {!isBoards ? <BlankPage /> : <ScreensPage />}
      {/* <ScreensPage /> */}
      <main>
        <Suspense fallback={<p>DDDD</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Sidebar />
    </>
  );
};
