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
  console.log(boards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const isBoards = boards.length > 0;
  return (
    <>
      <Header />
      {/* <ScreensPage /> */}
      {!isBoards ? <BlankPage /> : <ScreensPage board={boards[1]}  />}

      <main>
        <Suspense fallback={<p>DDDD</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Sidebar />
    </>


  );
};
