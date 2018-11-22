import styled, { css } from 'styled-components';
import { uiColors, fontWeights } from 'utils';
import colors from 'config/colors';
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
      color: ${uiColors('primary.main')};
    `,
    css`
      background: transparent;
      color: ${uiColors('text.light')};

      &:hover {
        color: ${uiColors('text.main')};
      }
    `
  )};
`;

export default Tab;
