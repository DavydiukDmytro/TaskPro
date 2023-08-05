import React, { useState } from 'react';


import sprite from '../../../../src/assets/svg/symbol-defs.svg';


export const board = ({
  icon, 
  title, 
  isActive
  }) => {
  const spriteClass = isActive ? 'active' : '';

  return (
    <div className={`board ${spriteClass}`}>
    <div className={`board-icon ${spriteClass}`}>
    <use href={sprite + dashboardIcon} />
    </div>
    <div>{title}</div>
      {isActive && (    
          <div>
            <use href={sprite + '#icon-pencil'} /> 
             </div>             
      
          <div>           
                <use href={sprite + '#icon-trash-04'} />
            </div>
       
      )}
    </div>
  );
};