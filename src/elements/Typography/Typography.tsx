import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';
import { textPrimary, textDanger, textSuccess, textWarning } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';

const typographyModifiers = {
  textPrimary,
  textDanger,
  textSuccess,
  textWarning,
};

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const defaultProps = {
  className: '',
  modifiers: [],
  color: '',
  style: {},
  description: false,
};

const Paragraph = styled.p<{ description?: any; modifiers?: any }>`
  color: ${({ description }) => (description ? colors.fontGray : colors.fontDarkGray)};
  font-size: ${({ description }) => (description ? fontSizes('large') : fontSizes('medium'))};
`;

const Heading = styled.h1<{
  variant: TypographyVariant;
  color?: string;
  modifiers?: Array<string>;
  description?: any;
}>`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${fontWeights('thin')};
  color: ${colors.blue};
  font-size: ${({ variant, theme }) => theme.font.sizes[variant]};
  ${applyStyleModifiers(typographyModifiers)};
`;

interface TypographyProps {
  variant: TypographyVariant;
  description?: boolean;
  children: ReactNode;
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string;
  modifiers?: Array<string>;
  color?: string;
  style?: Record<string, any>;
}

const Typography = ({
  variant,
  children,
  description,
  className,
  modifiers,
  color,
  style,
}: TypographyProps) => {
  if (variant === 'p') {
    return (
      <Paragraph
        className={className}
        description={description}
        modifiers={modifiers}
        color={color}
        style={style}
      >
        {children}
      </Paragraph>
    );
  }
  return (
    <Heading
      as={variant}
      className={className}
      variant={variant}
      modifiers={modifiers}
      color={color}
      style={style}
    >
      {children}
    </Heading>
  );
};

Typography.defaultProps = defaultProps;

export default Typography;
