import styled, { keyframes, css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';
import colors from 'config/colors';

const notify = keyframes`
  0%,
  100% {
    opacity: 0;
    top: 50px;
  }

  5%,
  95% {
    opacity: 1;
    top: 80px;
  }
`;

const NotificationContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.lightGray};
  color: ${colors.fontDarkGray};
  padding: 18px 4% 18px 2%;
  left: 15%;
  right: 15%;
  position: fixed;
  top: 80px;
  z-index: 120;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  animation: ${notify} ${prop('duration', 8)}s ease-in-out 1s 1;
  ${switchProp('variant', {
    success: css`
      border-color: ${colors.green};
      background: ${colors.paleGreen};

      strong {
        color: ${colors.green};
      }
    `,
    danger: css`
      border-color: ${colors.red};
      background: ${colors.paleRed};

      strong {
        color: ${colors.red};
      }
    `,
    warning: css`
      border-color: ${colors.yellow};
      background: ${colors.paleYellow};

      strong {
        color: ${colors.yellow};
      }
    `,
  })};

  i {
    margin-right: 12px;
    position: relative;
    top: 2px;
  }

  p {
    margin: 0;
    max-width: none;
  }
`;

export default NotificationContainer;
