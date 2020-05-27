import styled, { css } from 'styled-components';
import colors from 'theme/colors';
import { ifProp } from 'styled-tools';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const getBoxStyles = ({
  disabled = false,
  selected = false,
}: {
  disabled?: boolean;
  selected?: boolean;
  hideBorder?: boolean;
}) => {
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

export const PageBox = styled.button`
  width: fit-content;
  min-width: 2rem;
  height: 2rem;
  border-radius: 4px;
  margin: 0 0.2rem;
  text-align: center;
  border: 1px solid ${colors.gray};
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${colors.white};
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
