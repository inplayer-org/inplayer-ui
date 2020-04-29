import { DefaultTheme } from 'styled-components';

export interface ModifierProps {
  theme: DefaultTheme;
}

export const fontSizeExtraSmall = ({ theme }: ModifierProps) => `
  font-size: ${theme.font.sizes.extraSmall};
`;

export const fontSizeSmall = ({ theme }: ModifierProps) => `
  font-size: ${theme.font.sizes.small};
`;

export const fontSizeMedium = ({ theme }: ModifierProps) => `
  font-size: ${theme.font.sizes.medium};
`;

export const fontSizeLarge = ({ theme }: ModifierProps) => `
  font-size: ${theme.font.sizes.large};
`;
