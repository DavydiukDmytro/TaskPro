import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled.div`
  color: inherit;
`;

export const SidebarBoards = styled.div`
  margin-bottom: auto;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleMin = styled.span`
  margin-bottom: 8px;
  margin-right: auto;
  /* margin-left: 24px; */
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  display: block;
`;

export const SidebarCreateNew = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 14px 0;
  font-size: 14px;
  border-top: 1px solid #1f1f1f;
  border-bottom: 1px solid #1f1f1f;
  width: 212px;
`;

export const NewBoardBtn = styled.button`
  width: 40px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 6px;
  background: #bedbb0;
  line-height: 1;
  color: #121212;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SvgIcon = styled.svg`
  stroke: #121212;
`;

export const SidebarPrjctList = styled.ul`
  width: 260px;
  margin-bottom: 40px;

  height: calc(100vh - 252px - 392px);

  @media screen and (max-width: 375px) {
    height: calc(100vh - 252px - 358px);
    width: 225px
  }
  overflow-y: auto;
  min-height: 61px;
`;

export const PrjctItemMain = styled.div`
  padding: 20px 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
  path {
    stroke: rgba(255, 255, 255, 0.5);
  }
  path.selected {
    color: rgba(255, 255, 255, 1);
    stroke: rgba(255, 255, 255, 1);
  }
  :after {
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #bedbb0;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
  }
`;

export const FlexElems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const IconWrap = styled.div`
  margin-right: 8px;
  display: inline-block;
`;

export const PrjctActionList = styled.ul`
  display: flex;
  position: relative;
  background-color: #1F1F1F;
  height: 100%;
  padding-right: 24px;
  align-items: center;


  ::after {
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  li {
    cursor: pointer;
  }
  li:last-child {
    margin-left: 8px;
  }
`;

export const Text = styled.p`
  line-height: 21px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  /* color:rgba(255, 255, 255, 0.5); */
`;

export const Title = styled.h3`
  line-height: 21px;
  font-weight: 500;
  font-size: 14px;
`;

export const ListIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  stroke: rgba(255, 255, 255, 0.5);
  fill: transparent;
`;

export const LinkWrapper = styled.div`
position: relative;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    border-radius: 4px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  :hover::before {
    transform: scaleX(1);
  }

  &.active {
    ::before {
      content: none;
    }
  }
  
`;

export const EditDelBtn = styled.button`
  padding: 0;
  line-height: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const IconServBtn = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--iconColor);
  fill: none;
`;

export const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  position: relative;



  &.active {
    color: #161616;
    stroke: rgba(22, 22, 22, 0.5);

    fill: transparent;
    background-color: #F6F6F7;

    & svg {
      stroke: #FFFFFF;
    }
  }
`;