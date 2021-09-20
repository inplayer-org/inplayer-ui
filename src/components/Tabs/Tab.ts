import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { TrackPage } from '../../analytics';

import colors from '../../theme/colors';

const TabWrapper = styled.div<{ selected: boolean }>`
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  border-right: 1px solid ${colors.gray};
  font-weight: ${({ theme }) => theme.font.weights.light};
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
      background: ${({ theme }) => theme.palette.background.main};

      color: ${({ theme }) => theme.palette.text.main};

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

type PropsOf<T> = T extends (props: infer P) => infer R ? P : never;

const Tab = ({ tag, ...rest }: TagProps & PropsOf<typeof TabWrapper>) => (
  <TrackPage tag={tag}>
    <TabWrapper {...rest} />
  </TrackPage>
);

export default Tab;
