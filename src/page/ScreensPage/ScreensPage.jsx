import { Background } from 'components/Background/Background';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBoardByID } from 'store/boards/operationsBoards';
import { selectAllBoards } from 'store/boards/selectorsBoards';

const ScreensPage = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);
  const board = boards.find(item => item._id === boardId);
  useEffect(() => {
    dispatch(getBoardByID(boardId));
  }, [boardId, dispatch]);

  useEffect(() => {
    if (!board) {
      navigate('/home');
    }
  });

  return (
    <>
      {board && (
        <Background img={board.background}>
          <HeaderDashboard title={board.title} />
          <MainDashboard id={board._id} />
        </Background>
      )}
    </>
  );
};

export default ScreensPage;
