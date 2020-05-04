import React, { ReactChild } from 'react';
import styled from 'styled-components';
import colors from 'theme/colors';
import Typography, { TypographyVariant } from '../Typography/Typography';
import CardContent from './CardContent';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.white};
  line-height: 1.5;
  box-sizing: border-box;
  margin: 0;
  padding: 0 1.5rem;
  list-style: none;
  width: 300px;
`;

const CardTitle = styled(Typography)`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

interface Props {
  /**
   * Title of the Card
   */
  title?: string;
  /**
   * Type of the variant
   */
  titleVariant?: TypographyVariant;
  children: ReactChild;
}

const Card = ({ title, titleVariant = 'h1', children }: Props) => (
  <CardWrapper>
    {title && <CardTitle variant={titleVariant}>{title}</CardTitle>}
    <CardContent>{children}</CardContent>
  </CardWrapper>
);

export default Card;
