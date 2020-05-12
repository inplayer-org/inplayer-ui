import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { textPrimary, textDanger, textSuccess, textWarning } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colors from 'theme/colors';

const typographyModifiers = {
  textPrimary,
  textDanger,
  textSuccess,
  textWarning,
};

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type ParagraphProps = {
  color: string;
  description: boolean;
  modifiers: any;
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
};

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ color, theme }) => color || `${theme.palette.text.main}`};
  ${({ description, theme: { palette, font } }) =>
    description &&
    `
     color: ${palette.text.light};
     font-size:${font.sizes.large};
   `}
  ${applyStyleModifiers(typographyModifiers)}
`;

const Heading = styled.h1<HeadingProps>`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.weights.thin};
  color: ${({ color }) => color || colors.blue};
  font-size: ${({ theme, variant }) => theme.font.sizes[variant]};
  ${applyStyleModifiers(typographyModifiers)}
`;

export type Props = {
  /**
   * Variant type
   */
  variant?: TypographyVariant;
  /**
   * When prop is set, the paragraph element has `palette.primary.fontGray` color
   */
  description?: boolean;
  /**
   * Text color modifiers
   */
  modifiers?: Array<string>;
  /**
   * Text color
   */
  color?: string;
  /**
   * External class name
   */
  className?: string;
  children: ReactChild;
};

const Typography = ({
  variant = 'h1',
  children,
  description = false,
  modifiers = [],
  color = '',
  className = '',
}: Props) => {
  if (variant === 'p') {
    return (
      <Paragraph
        className={className}
        description={description}
        modifiers={modifiers}
        color={color}
      >
        {children}
      </Paragraph>
    );
  }
  return (
    <Heading
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
