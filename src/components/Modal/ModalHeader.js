// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors } from 'utils';
import { Typography } from 'elements';

type Props = {
  children: Node,
  closeModal: Function,
};

const HeaderWrapper = styled.div`
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid ${colors.gray};
`;

const Title = styled(Typography)`
  margin: 0;
`;

const IconClose = styled.span`
  position: absolute;
  height: 18px;
  width: 18px;
  top: 10px;
  right: 10px;
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
