// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
};

const ContentContainer = styled.div`
  padding: 0.625rem 1.25rem;
  box-sizing: border-box;
`;

const ModalContent = ({ children }: Props) => <ContentContainer>{children}</ContentContainer>;

export default ModalContent;
