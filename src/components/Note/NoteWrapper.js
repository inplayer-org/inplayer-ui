import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { switchProp } from 'styled-tools';
import { fontWeights } from 'utils';

const NoteWrapper = styled.p`
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  padding: 18px 2%;
  border-radius: 3px;
  background: ${colors.white};
  color: ${colors.fontDarkGray};
  font-weight: ${fontWeights('light')};

  strong {
    padding-right: 5px;
  }

  ${switchProp('type', {
    success: css`
      border: 1px solid ${colors.accentBlue};

      strong {
        color: ${colors.accentBlue};
      }

      i {
        color: ${colors.accentBlue};
      }
    `,

    warning: css`
      border: 1px solid ${colors.yellow};
      background: ${colors.yellowLight};
    `,

    danger: css`
      border: 1px solid ${colors.red};
      background: ${colors.pink};
    `,

    transparentInformative: css`
      background: ${colors.lightGray};
    `,
  })};
`;

export default NoteWrapper;
