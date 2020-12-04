import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { textPrimary, textDanger, textSuccess, textWarning, skeleton } from '../../modifiers';

const typographyModifiers = {
  textPrimary,
  textDanger,
  textSuccess,
  textWarning,
};

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type ParagraphProps = {
  color: string;
  modifiers: any;
  isLoading: boolean;
};

type HeadingProps = {
  color: string;
  variant: keyof {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  modifiers: Array<string>;
  isLoading: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ color, theme }) => color || `${theme.palette.text.main}`};
  ${applyStyleModifiers(typographyModifiers)};
  ${({ isLoading }: ParagraphProps) => isLoading && skeleton()};
`;

const Heading = styled.h1<HeadingProps>`
  font-weight: ${({ theme }) => theme.font.weights.thin};
  color: ${({ color, theme }) => color || `${theme.palette.text.main}`};
  font-size: ${({ theme, variant }) => theme.font.sizes[variant]};
  ${applyStyleModifiers(typographyModifiers)}
  ${({ isLoading }: HeadingProps) => isLoading && skeleton()};
`;

export type Props = {
  variant?: TypographyVariant;
  description?: boolean;
  modifiers?: Array<string>;
  color?: string;
  className?: string;
  children: ReactChild;
  isLoading?: boolean;
};

const Typography = ({
  isLoading = false,
  variant = 'h1',
  children,
  modifiers = [],
  color = '',
  className = '',
}: Props) => {
  if (variant === 'p') {
    return (
      <Paragraph isLoading={isLoading} className={className} modifiers={modifiers} color={color}>
        {children}
      </Paragraph>
    );
  }
  return (
    <Heading
      isLoading={isLoading}
      className={className}
      as={variant}
      variant={variant}
      modifiers={modifiers}
      color={color}
    >
      {children}
    </Heading>
  );
};

export default Typography;
