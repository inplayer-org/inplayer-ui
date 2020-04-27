import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import colors from 'theme/colors';
import { fontWeights } from 'utils';

export type NoteType = 'informative' | 'success' | 'warning' | 'danger';

const NoteWrapper = styled.p<{ type: NoteType }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  padding: 1.125rem 2%;
  border-radius: 3px;
  background: ${colors.white};
  color: ${({ theme }) => theme.palette.text.main};
  font-weight: ${({ theme }) => theme.font.weights.light}
  letter-spacing: 0.01em;
  line-height: 1.8;

  strong {
    padding-right: 0.3125rem;
  }

  i {
    margin-right: 0.75rem;
    position: relative;
    top: 2px;
  }

  ${switchProp('type', {
    success: css`
      border-color: ${colors.skyBlue};

      strong {
        color: ${colors.skyBlue};
      }

      i {
        color: ${colors.skyBlue};
      }
    `,

    warning: css`
      border-color: ${colors.yellow};
      background: ${colors.paleYellow};

      i {
        color: ${colors.yellow};
      }
    `,

    danger: css`
      border-color: ${colors.red};
      background: ${colors.paleRed};

      i {
        color: ${colors.red};
      }
    `,

    informative: css`
      background: ${colors.lightGray};
    `,
  })};
`;

export default NoteWrapper;
