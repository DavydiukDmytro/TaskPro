import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardByID } from 'store/boards/operationsBoards';
import {
  selectAllBoards,
} from 'store/boards/selectorsBoards';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const boards = useSelector(selectAllBoards);
  const board = boards[1];


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
