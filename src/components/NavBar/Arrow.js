// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import colors from 'config/colors';
import { transparentize } from 'polished';

export const ArrowContainer = styled.div`
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

export const NavbarArrow = styled.i`
  display: inline-block;
  padding: 0.225rem;
  transition: all 0.5s ease;
  cursor: pointer;
  ${switchProp('section', {
    navbar: css`
      border: solid ${transparentize(0.6, colors.white)};
      border-width: 1px 0 0 1px;
      transform: ${ifProp('open', 'rotate(-45deg)', 'rotate(135deg)')};
    `,
    accordion: css`
      border: solid ${colors.darkGray};
      border-width: 1px 0 0 1px;
      transform: ${ifProp('open', 'rotate(135deg)', 'rotate(-45deg)')};
    `,
  })};
`;

type Props = {
  open: boolean,
  section: string,
};

const Arrow = ({ open, section }: Props) => (
  <ArrowContainer section={section}>
    <NavbarArrow open={open} section={section} />
  </ArrowContainer>
);

export default Arrow;
