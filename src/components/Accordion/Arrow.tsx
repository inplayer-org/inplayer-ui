import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { transparentize } from 'polished';
import colors from '../../theme/colors';

export const ArrowContainer = styled.div<{ section: string }>`
  width: 18px;
  margin: 0 1rem 1rem 1rem;
  text-align: center;
  ${switchProp('section', {
    navbar: css`
      align-self: flex-end;

      &:hover i {
        border-color: ${colors.white};
      }
    `,
    accordion: css`
      align-self: flex-start;
    `,
  })};
`;

export const NavbarArrow = styled.i<{ open: boolean; section: string }>`
  display: inline-block;
  transition: all 0.5s ease;
  cursor: pointer;
  ${switchProp('section', {
    navbar: css`
      padding: 0.225rem;
      border: solid ${transparentize(0.6, colors.white)};
      border-width: 1px 0 0 1px;
      transform: ${ifProp('open', 'rotate(-45deg)', 'rotate(135deg)')};
    `,
    accordion: css`
      border: solid ${colors.midnightBlue};
      border-width: 1px 0 0 1px;
      transform: ${ifProp('open', 'rotate(135deg)', 'rotate(-45deg)')};
      padding: 0.4rem;
    `,
  })};
`;

type Props = {
  open: boolean;
  section: string;
  onClick?: any;
};

const Arrow = ({ open, section, onClick }: Props) => (
  <ArrowContainer section={section} onClick={onClick}>
    <NavbarArrow open={open} section={section} />
  </ArrowContainer>
);

export default Arrow;
