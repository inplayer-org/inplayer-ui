// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { uiColors, fontWeights, fontSizes } from 'utils';
import { textPrimary, textDanger, textSuccess, textWarning } from 'modifiers';
import { applyStyleModifiers } from 'styled-components-modifiers';

const typographyModifiers = {
  textPrimary,
  textDanger,
  textSuccess,
  textWarning,
};

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const Paragraph = styled.p`
  font-size: ${fontSizes('medium')};
  color: ${ifProp('color', prop('color'), uiColors('text.main'))};
  ${ifProp(
    'description',
    css`
      color: ${uiColors('text.light')};
      font-size: ${fontSizes('large')};
    `
  )};
  ${applyStyleModifiers(typographyModifiers)};
`;

const Heading = styled.h1`
  font-family: ${prop('theme.font.primary')};
  font-weight: ${fontWeights('thin')};
  color: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
  font-size: ${({ theme, variant }) => theme.font.sizes[variant]};
  ${applyStyleModifiers(typographyModifiers)};
`;

export type TypographyProps = {
  variant: TypographyVariant,
  description?: boolean,
  children: Node,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
  modifiers?: Array<String>,
  color?: string,
  style?: Object,
};

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

Typography.defaultProps = {
  className: '',
  modifiers: [],
  color: '',
  style: {},
  description: false,
};

export default Typography;
