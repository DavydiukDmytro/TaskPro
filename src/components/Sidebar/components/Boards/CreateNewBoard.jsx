import React, { useState } from 'react';
import { SidebarCreateNew, NewBoardBtn, Title, SvgIcon } from './Board.styled';
import { ModalAddBoard } from 'components/Modal/Modal';

import spriteIcon from 'assets/svg/symbol-defs.svg';

export const CreateNewBoard = ({ onCreateNew }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  return (
    <SidebarCreateNew>
      <Title>
        Create a <br /> new board
      </Title>
      <NewBoardBtn onClick={handleToggleModal} type="button">
        {/* <AddIcon /> */}
        <SvgIcon aria-label="icon-Project" width="20" height="20">
          <use href={spriteIcon + '#icon-Project'}></use>
        </SvgIcon>
      </NewBoardBtn>
      <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal} />
    </SidebarCreateNew>
  );
};