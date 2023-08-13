import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import { ScreensPage } from 'page/ScreensPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from 'store/boards/operationsBoards';
import { selectAllBoards } from 'store/boards/selectorsBoards';

export const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<p>DDDD</p>}>
        <Outlet />
      </Suspense>
      <Sidebar />
    </>
  );
};
