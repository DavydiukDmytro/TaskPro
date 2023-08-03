import React, { useState } from 'react';

import {
  EditDelBtn,
  FlexElems,
  IconServBtn,
  LinkWrapper,
  ListIcon,
  PrjctActionList,
  StyledLink,
  Text,
} from './Board.styled';
import sprite from '../../../../assets/svg/symbol-defs.svg';
import { ModalAddBoard } from 'components/Modal/Modal';

export const ProjectItem = ({
  title,
  id,
  background,
  dashboardIcon,
  icon: Icon,
  onUpdate,
  activeBoardId,
  setActiveBoardId,
  onDelete,
}) => {
  const isActive = activeBoardId === id;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  const handleClick = () => {
    setActiveBoardId(id);
  };

  const handleEdit = () => {
    console.log('Edit projects board');
  };

  const handleUpdateBoard = data => {
    onUpdate(id, data);
  };

 
  return (
    <LinkWrapper className={isActive ? 'active' : ''}>
      <StyledLink to={id} onClick={handleClick}>
        <FlexElems>
          <ListIcon>
            <use href={sprite + dashboardIcon} />
          </ListIcon>
          <Text>{title}</Text>
        </FlexElems>
      </StyledLink>

      {isActive && (
        <PrjctActionList>
          <li onClick={handleEdit}>
            <EditDelBtn type="button" onClick={handleToggleModal}>
              <IconServBtn width={16} height={16}>
                <use href={sprite + '#icon-pencil'} />
              </IconServBtn>
            </EditDelBtn>
            <ModalAddBoard
              isOpen={isOpen}
              onClose={handleToggleModal}
              type="edit"
              handleUpdateBoard={handleUpdateBoard}
              title={title}
              background={background}
              dashboardIcon={dashboardIcon}
            />
          </li>
          <li>
            <EditDelBtn type="button" onClick={() => onDelete(id)}>
              <IconServBtn width={16} height={16}>
                <use href={sprite + '#icon-trash-04'} />
              </IconServBtn>
            </EditDelBtn>
          </li>
        </PrjctActionList>
      )}
    </LinkWrapper>
  );
};