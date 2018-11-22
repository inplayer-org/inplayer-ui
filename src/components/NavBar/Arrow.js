// @flow
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';
import { transparentize } from 'polished';

export const ArrowContainer = styled.div`
  width: 18px;
  margin: 0 17px 16px 15px;
  align-self: flex-end;
  text-align: center;

  &:hover i {
    border-color: ${colors.white};
  }
`;

export const NavbarArrow = styled.i`
  border: solid ${transparentize(0.6, colors.white)};
  border-width: 1px 0 0 1px;
  display: inline-block;
  padding: 3px;
  transform: ${ifProp('open', 'rotate(-45deg)', 'rotate(135deg)')};
  transition: all 0.5s ease;
`;

type Props = {
  open: boolean,
};

const Arrow = ({ open }: Props) => (
  <ArrowContainer>
    <NavbarArrow open={open} />
  </ArrowContainer>
);

export default Arrow;
