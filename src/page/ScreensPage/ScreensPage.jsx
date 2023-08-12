import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import BlankPage from 'page/BlankPage/BlankPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardByID } from 'store/boards/operationsBoards';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';

const ScreensPage = ({ board }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  console.log('currentBoard:', currentBoard);

  useEffect(() => {
    if (board) dispatch(getBoardByID(board._id));
  }, [dispatch, board]);

  return (
    <>
      {board && (
        <Background>
          <HeaderDashboard title={board.title} />
          <MainDashboard id={board._id} />
        </Background>
      )}
    </>

  );
};

export default ScreensPage;
