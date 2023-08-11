import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardByID } from 'store/boards/operationsBoards';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';

const ScreensPage = ({ board }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  console.log('currentBoard:', currentBoard);
  console.log('Board:', board.title);

  useEffect(() => {
    if (board) dispatch(getBoardByID(board._id));
  }, [dispatch, board]);

  return (
    <Background>
      <HeaderDashboard title={board.title} />
      <MainDashboard />
    </Background>
  );
};

export default ScreensPage;
