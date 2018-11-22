// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
};

const ContentContainer = styled.div`
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
`;

const ModalContent = ({ children }: Props) => <ContentContainer>{children}</ContentContainer>;

export default ModalContent;
