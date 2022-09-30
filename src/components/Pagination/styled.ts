import { AnalyticsProps } from 'analytics';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from '../../theme/colors';

export type BoxStyles = {
  disabled?: boolean;
  selected?: boolean;
  hideBorder?: boolean;
};

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const getBoxStyles = ({ disabled = false, selected = false }: BoxStyles) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      border: 1px solid ${colors.gray};
      color: ${colors.gray};
    `;
  }
  if (selected) {
    return css`
      border: 1px solid ${colors.skyBlue};
      color: ${colors.white};
      background-color: ${colors.skyBlue};
    `;
  }
  return css`
    :hover {
      border: 1px solid ${colors.skyBlue};
      ${ifProp(
        'hideBorder',
        css`
          border: none;
        `
      )}
      color: ${colors.skyBlue};
      font-weight: bold;
    }
  `;
};

export const PageBox = styled.button<AnalyticsProps & BoxStyles>`
  width: fit-content;
  min-width: 2rem;
  height: 2rem;
  border-radius: 4px;
  margin: 0 0.2rem;
  text-align: center;
  border: 1px solid ${colors.gray};
  color: ${({ theme }) => theme.palette.text.main};
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.palette.background.main};
  outline: none;
  ${ifProp(
    'hideBorder',
    css`
      border: none;
      background-color: transparent;
    `
  )}
  ${getBoxStyles}
`;
