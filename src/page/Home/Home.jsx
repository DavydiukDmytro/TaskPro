import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from 'store/boards/operationsBoards';
import { selectAllBoards } from 'store/boards/selectorsBoards';
import { Loader } from 'components/Loader';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  useEffect(() => {
    if (!hasRedirected && boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
      setHasRedirected(true);
    }
  }, [boards, hasRedirected, navigate]);

  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
