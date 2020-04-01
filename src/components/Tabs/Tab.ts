import styled, { css } from 'styled-components';
import { fontWeights } from 'utils';
import colors from 'theme/colors';
import { ifProp } from 'styled-tools';

const Tab = styled.div`
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  border-right: 1px solid ${colors.gray};
  font-weight: ${fontWeights('light')};
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:last-child {
    border: none;
  }

  ${ifProp(
    'selected',
    css`
      background: ${colors.white};
      color: ${({ theme }) => theme.palette.primary.main};
    `,
    css`
      background: transparent;

      color: ${({ theme }) => theme.palette.text.light};

      &:hover {
        color: ${({ theme }) => theme.palette.text.main};
      }

      span {
        background: transparent;
        color: ${({ theme }) => theme.palette.text.light};
      }
    `
  )};
`;

export default Tab;
