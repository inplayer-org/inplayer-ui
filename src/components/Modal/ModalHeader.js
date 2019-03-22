// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors } from 'utils';
import { Typography } from 'elements';

type Props = {
  children: Node,
  closeModal: () => any,
};

const HeaderWrapper = styled.div`
  padding: 1.25rem;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid ${colors.gray};
`;

const Title = styled(Typography)`
  margin: 0;
`;

const IconClose = styled.span`
  position: absolute;
  height: 1.125rem;
  width: 1.125rem;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;

  &::before {
    content: '✕';
    color: ${uiColors('secondary.main')};
  }
`;

const ModalHeader = ({ children, closeModal }: Props) => (
  <HeaderWrapper>
    <Title variant="h4">{children}</Title>
    <IconClose onClick={closeModal} />
  </HeaderWrapper>
);

export default ModalHeader;
