import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';
import { SidebarPrjctList } from './Board.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectDashboards } from 'redux/dashboards/selectors';
import {
  deleteUserBoard,
  fetchUserDashboards,
  getColumnsForBoard,
  updateUserBoard,
} from 'redux/dashboards/operation';


export const BoardsList = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(selectDashboards);
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const [activeBoardId, setActiveBoardId] = useState(null);


  const handleDeleteBoard = async boardId => {
    await dispatch(deleteUserBoard(boardId));
    dispatch(fetchUserDashboards());
  };

  const UpdateBoard = async (boardId, data) => {
    await dispatch(updateUserBoard({ boardId: boardId, board: data }));
    await dispatch(fetchUserDashboards());
    await dispatch(getColumnsForBoard(boardId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <SidebarPrjctList>
      {dashboards &&
        dashboards.map(dashboard => {
          return (
            <ProjectItem
              key={dashboard._id}
              title={dashboard.title}
              id={dashboard._id}
              background={dashboard.background}
              dashboardIcon={dashboard.dashboardIcon}
              activeBoardId={activeBoardId}
              setActiveBoardId={setActiveBoardId}
              onDelete={handleDeleteBoard}
              onUpdate={UpdateBoard}
            />
          );
        })}
    </SidebarPrjctList>
  );
};