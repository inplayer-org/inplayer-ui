import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import colors from '../../theme/colors';
import Typography, { TypographyVariant } from '../Typography/Typography';
import CardContent from './CardContent';
import { AnalyticsProps } from '../../analytics';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 0 4px 1px ${transparentize(0.87, colors.fontDarkGray)};
  border-radius: 3px;
  background: ${({ theme }) => theme.palette.background.main};
  line-height: 1.5;
  box-sizing: border-box;
  margin: 0;
  padding: 0 1.5rem;
  list-style: none;
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

type Props = {
  title?: string;
  titleVariant?: TypographyVariant;
  className?: string;
  children: ReactChild;
} & AnalyticsProps;

const Card = ({ title, titleVariant = 'h1', className = '', children }: Props) => (
  <CardWrapper className={className}>
    {title && <CardTitle variant={titleVariant}>{title}</CardTitle>}
    <CardContent>{children}</CardContent>
  </CardWrapper>
);

export default Card;
