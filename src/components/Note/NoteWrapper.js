import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { switchProp } from 'styled-tools';
import { fontWeights, uiColors } from 'utils';

const NoteWrapper = styled.p`
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  padding: 18px 2%;
  border-radius: 3px;
  background: ${colors.white};
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};

  strong {
    padding-right: 5px;
  }

  i {
    margin-right: 12px;
    position: relative;
    top: 2px;
  }

  ${switchProp('type', {
    success: css`
      border-color: ${colors.accentBlue};

      strong {
        color: ${colors.accentBlue};
      }

      i {
        color: ${colors.accentBlue};
      }
    `,

    warning: css`
      border-color: ${colors.yellow};
      background: ${colors.yellowLight};

      i {
        color: ${colors.yellow};
      }
    `,

    danger: css`
      border-color: ${colors.red};
      background: ${colors.pink};

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
