import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactChild;
}

const ContentContainer = styled.div`
  padding: 0.625rem 1.25rem;
  box-sizing: border-box;
  min-height: 12rem;
`;

const ModalContent = ({ children }: Props) => <ContentContainer>{children}</ContentContainer>;

export default ModalContent;
