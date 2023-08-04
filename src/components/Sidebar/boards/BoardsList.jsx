
  import React from 'react';


  const boards = [
    {
      id: 1,
      iconId: 'board-icon-1',
      title: 'Board 1',
      isActive: true,
    },
    {
      id: 2,
      iconId: 'board-icon-2',
      title: 'Board 2',
      isActive: false,
    },
    {
      id: 3,
      iconId: 'board-icon-3',
      title: 'Board 3',
      isActive: true,
    },
 
  ];
  
  export const BoardList = ({ boards }) => {
    return (
      <div className="board-list">
        {boards.map((board) => (
          <Board
            key={board.id}
            icon={`icon-sprite-class-${board.iconId}`}
            title={board.title}
            isActive={board.isActive}
          />
        ))}
      </div>
    );
  };
  


