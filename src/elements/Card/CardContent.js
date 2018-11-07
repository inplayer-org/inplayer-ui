// @flow
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 24px;
`;

const CardContent = ({ children }: Props) => <ContentWrapper>{children}</ContentWrapper>;

CardContent.defaultProps = {
  component: 'div',
};

export default CardContent;
