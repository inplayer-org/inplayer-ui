import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'theme/colors';
import { fontSizes } from 'utils';

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

export const MenuButton = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  min-width: 30px;
  transition: all 0.5s ease;

  &:hover {
    background: ${colors.lightGray};
  }
`;

export const MenuArrow = styled.i<{ open: boolean }>`
  border: solid ${colors.darkGray};
  border-width: 1px 0 0 1px;
  display: inline-block;
  padding: 4px;
  transform: ${ifProp('open', 'rotate(45deg)', 'rotate(-135deg)')};
  transition: all 0.5s ease;
`;

export const UserMenuContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  position: relative;
  padding: 0 10px;
`;

export const CloseLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const MenuTitle = styled.span`
  color: ${({ theme }) => theme.palette.text.light};
  transition: color 0.3s ease;
  font-size: ${fontSizes('medium')};
  padding: 0 3px 0 10px;

  &:hover {
    color: ${({ theme }) => theme.palette.text.main};
  }
`;
