import styled, { keyframes, css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';
import colors from 'theme/colors';
import { transparentize } from 'polished';
import { CSSProperties } from 'react';
import { NotificationVariant } from './Notification';

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

type NotificationContainerProps = {
  variant?: NotificationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

const NotificationContainer = styled.div<NotificationContainerProps>`
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.lightGray};
  color: ${colors.fontDarkGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 2%;
  min-height: 10%;
  left: 15%;
  right: 15%;
  position: fixed;
  top: 80px;
  z-index: 120;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  animation: ${notify} ${prop('duration', 8)}s ease-in-out 0.2s 1;
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
    margin-right: 0.75rem;
    position: relative;
    top: 2px;
  }

  p {
    margin: 0;
    max-width: none;
  }
`;

export const CloseIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  align-self: flex-start;
  color: ${transparentize(0.4, colors.fontDarkGray)};
  cursor: pointer;
  transition: all 0.5s ease;

  &::before {
    content: '✕';
    position: relative;
    left: 5px;
    font-size: 0.75rem;
    top: -1px;
  }

  &:hover {
    background: ${colors.white};
    color: ${colors.fontDarkGray};
  }
`;

export default NotificationContainer;
