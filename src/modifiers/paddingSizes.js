import { paddingSizes } from 'utils';

export const paddingSmall = ({ theme }) => `
   padding: ${paddingSizes('small', theme)};
`;

export const paddingMedium = ({ theme }) => `
   cpadding: ${paddingSizes('medium', theme)};
`;
