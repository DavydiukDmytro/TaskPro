import { Button } from 'components/Button/Button';
import css from './MainDashboard.module.css';
import { CardSection } from 'components/CardSection/CardSeection';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from 'store/boards/selectorsBoards';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { AddColumn } from 'components/AddColumn';

export const MainDashboard = ({ id }) => {
  const [isOpenAddColumn, setIsOpenAddColumn] = useState(false);
  const board = useSelector(selectCurrentBoard);

  const handleAddСolumn = async () => {
    setIsOpenAddColumn(true);
  };

  return (
    <>
      <div className={css.board}>
        <ul className={css.columnList}>
          {board.map(column => (
            <li key={column._id}>
              <CardSection column={column} />
            </li>
          ))}
        </ul>

        <div className={css.columnButton}>
          <Button
            isContrast={false}
            type={'button'}
            text={'Add another column'}
            action={handleAddСolumn}
          />
        </div>
      </div>
      {isOpenAddColumn && (
        <Modal
          handleClose={() => {
            setIsOpenAddColumn(false);
          }}
        >
          <AddColumn
            handleClose={() => {
              setIsOpenAddColumn(false);
            }}
            boardId={id}
          ></AddColumn>
        </Modal>
      )}
    </>
  );
};
