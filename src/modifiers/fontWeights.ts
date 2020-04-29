import { ModifierProps } from './types';

export const fontLight = ({ theme }: ModifierProps) => `
  font-weight: ${theme.font.weights.light};
`;

export const fontNormal = ({ theme }: ModifierProps) => `
  font-weight: ${theme.font.weights.normal};
`;

export const fontSemiBold = ({ theme }: ModifierProps) => `
  font-weight: ${theme.font.weights.semiBold};
`;

export const fontBold = ({ theme }: ModifierProps) => `
  font-weight: ${theme.font.weights.bold};
`;
