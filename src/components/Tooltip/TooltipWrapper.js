import styled, { keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import colors from 'config/colors';
import { fontSizes, uiColors } from 'utils';

const tipsVertical = keyframes`
  to {
    opacity: 0.9;
    transform: translate(-50%, 0);
  }
`;

const tipsHorizontal = keyframes`
  to {
    opacity: 0.9;
    transform: translate(0, -50%);
  }
`;

const tipsDiagonalRight = keyframes`
  to {
    opacity: 0.9;
    transform: translate(-1em, 0);
  }
`;

const tipsDiagonalLeft = keyframes`
  to {
    opacity: 0.9;
    transform: translate(1em, 0);
  }
`;

const TooltipWrapper = styled.div`
  color: ${uiColors('text.light')};
  cursor: pointer;

  [tooltip] {
    position: relative;
  }

  [tooltip]::before,
  [tooltip]::after {
    text-transform: none;
    line-height: 1;
    font-size: ${fontSizes('small')};
    user-select: none;
    pointer-events: none;
    position: absolute;
    display: none;
    opacity: 0;
  }

  [tooltip]::before {
    content: '';
    border: 5px solid transparent;
    z-index: 1001;
  }

  [tooltip]::after {
    content: attr(tooltip);
    text-align: center;
    min-width: 16em;
    max-width: 21em;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1ch 1.5ch;
    border-radius: 0.3em;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
    background: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
    color: ${colors.white};
    z-index: 1000;
    opacity: 0.8;
  }

  [tooltip]:hover::before,
  [tooltip]:hover::after {
    display: block;
  }

  [tooltip]:not([flow])::before,
  [tooltip][flow^='up']::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
  }

  [tooltip]:not([flow])::after,
  [tooltip][flow^='up']::after {
    bottom: calc(100% + 5px);
  }

  [tooltip]:not([flow])::before,
  [tooltip]:not([flow])::after,
  [tooltip][flow^='up']::before,
  [tooltip][flow^='up']::after {
    left: 50%;
    transform: translate(-50%, 0.5em);
  }

  [tooltip][flow^='down']::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
  }

  [tooltip][flow^='down']::after {
    top: calc(100% + 5px);
  }

  [tooltip][flow^='down']::before,
  [tooltip][flow^='down']::after {
    left: 50%;
    transform: translate(-50%, -0.5em);
  }

  [tooltip][flow$='-left']::after {
    right: 50%;
    left: auto;
  }

  [tooltip][flow='up-left']::after {
    transform: translate(1.5em, 0.5em);
  }

  [tooltip][flow='down-left']::after {
    transform: translate(1.5em, -0.5em);
  }

  [tooltip][flow='up-right']::after {
    transform: translate(-1.5em, 0.5em);
  }

  [tooltip][flow='down-right']::after {
    transform: translate(-1.5em, -0.5em);
  }

  [tooltip][flow='left']::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
    left: -5px;
    transform: translate(0.5em, -50%);
  }

  [tooltip][flow='left']::after {
    top: 50%;
    right: calc(100% + 5px);
    transform: translate(0.5em, -50%);
  }

  [tooltip][flow='right']::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: ${ifProp('color', prop('color'), uiColors('secondary.main'))};
    right: -5px;
    transform: translate(-0.5em, -50%);
  }

  [tooltip][flow='right']::after {
    top: 50%;
    left: calc(100% + 5px);
    transform: translate(-0.5em, -50%);
  }

  [tooltip]:not([flow]):hover::before,
  [tooltip]:not([flow]):hover::after,
  [tooltip][flow^='up']:hover::before,
  [tooltip][flow^='up']:hover::after,
  [tooltip][flow^='down']:hover::before,
  [tooltip][flow^='down']:hover::after {
    animation: ${tipsVertical} 150ms cubic-bezier(0.5, 0, 0.6, 1.3) 1ms forwards;
  }

  [tooltip][flow$='-right']:hover::after {
    animation: ${tipsDiagonalRight} 150ms cubic-bezier(0.5, 0, 0.6, 1.3) 1ms forwards;
  }

  [tooltip][flow$='-left']:hover::after {
    animation: ${tipsDiagonalLeft} 150ms cubic-bezier(0.5, 0, 0.6, 1.3) 1ms forwards;
  }

  [tooltip][flow='left']:hover::before,
  [tooltip][flow='left']:hover::after,
  [tooltip][flow='right']:hover::before,
  [tooltip][flow='right']:hover::after {
    animation: ${tipsHorizontal} 150ms cubic-bezier(0.5, 0, 0.6, 1.3) 1ms forwards;
  }

  [tooltip='']::after,
  [tooltip='']::before {
    display: none !important;
  }
`;

export default TooltipWrapper;
