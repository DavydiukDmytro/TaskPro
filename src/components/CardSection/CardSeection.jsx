import css from './CardSection.module.css';

import { CardTitle } from 'components/CardTitle/CardTitle';
import { CardList } from 'components/CardList/CardList';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { AddCard } from 'components/AddCard';

export const CardSection = ({ column }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddTask = () => {
    setIsOpenModal(true);
  };

  const isColumn = column.tasks;
  return (
    <>
      <div className={css.cardContainer}>
        <CardTitle title={column.title} id={column._id} />
        {isColumn && <CardList tasks={column.tasks} />}
        <Button type="button" text="Add another card" action={handleAddTask} />
      </div>
      {isOpenModal && (
        <Modal
          handleClose={() => {
            setIsOpenModal(false);
          }}
        >
          <AddCard
            columnId={column._id}
            handleClose={() => {
              setIsOpenModal(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
