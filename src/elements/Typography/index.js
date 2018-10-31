// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { uiColors, fontWeights, fontSizes } from 'utils';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const Paragraph = styled.p`
  max-width: 720px;
  font-size: ${fontSizes('medium')};
  color: ${uiColors('text.main')};
  ${ifProp(
    'description',
    css`
      color: ${uiColors('text.light')};
      font-size: ${fontSizes('large')};
    `
  )};
`;

const Heading = styled.h1`
  font-family: ${prop('theme.font.primary')};
  font-weight: ${fontWeights('thin')};
  margin: 1.7em 0 1em;
  color: ${uiColors('secondary.main')};
  font-size: ${({ theme, variant }) => theme.font.sizes[variant]};
`;

export type TypographyProps = {
  variant: TypographyVariant,
  description: ?boolean,
  children: Node,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const Typography = ({ variant, children, description, className }: TypographyProps) => {
  if (variant === 'p') {
    return (
      <Paragraph className={className} description={description}>
        {children}
      </Paragraph>
    );
  }
  const Component = Heading.withComponent(variant);
  return (
    <Component className={className} variant={variant}>
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  className: '',
};

export default Typography;
