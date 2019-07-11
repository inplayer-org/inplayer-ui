// @flow
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';
import { transparentize } from 'polished';

export const ArrowContainer = styled.div`
  width: 18px;
  margin: 0 1rem 1rem 1rem;
  align-self: flex-start;
  text-align: center;

  &:hover i {
    border-color: ${colors.gray};
  }
`;

export const NavbarArrow = styled.i`
  border: solid ${transparentize(0.6, colors.blue)};
  border-width: 1px 0 0 1px;
  display: inline-block;
  padding: 0.225rem;
  transform: ${ifProp('open', 'rotate(135deg)', 'rotate(-45deg)')};
  transition: all 0.5s ease;
  cursor: pointer;
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
