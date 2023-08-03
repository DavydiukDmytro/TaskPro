import React from 'react';

import { CreateNewBoard } from './CreateNewBoard';
import { BoardsList } from './BoardsList';
import { SidebarBoards, TitleMin } from './Board.styled';



export const Boards = ({ onCreateNew }) => {
  return (
    <SidebarBoards>

        <TitleMin>My boards</TitleMin>
        <CreateNewBoard onCreateNew={onCreateNew} />

        <BoardsList />

    </SidebarBoards>
  );
};