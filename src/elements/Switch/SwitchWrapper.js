import styled from 'styled-components';
import uiColors from 'utils/uiColors';
import colors from 'config/colors';

const SwitchWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: -1px;
    left: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid ${colors.gray};
    background: ${colors.white};
    box-sizing: border-box;
  }

  .react-toggle-track {
    width: 34px;
    height: 18px;
    padding: 0;
    border-radius: 30px;
    background-color: ${colors.lightGray};
    transition: all 0.2s ease;
    border: 1px solid ${colors.gray};
  }

  .react-toggle {
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    user-select: none;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    background: #00000005 !important;
    cursor: auto;
  }

  .react-toggle--disabled .react-toggle-track {
    background: #00000005 !important;
    border: 1px solid ${colors.gray} !important;
  }

  .react-toggle--disabled .react-toggle-thumb {
    background: #f0f3f6;
    border: 1px solid ${colors.gray};
  }

  .react-toggle--checked .react-toggle-track {
    border: 1px solid ${uiColors('primary.main')};
    background: ${uiColors('primary.main')};
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 14px;
  }

  &:hover .react-toggle-track {
    background: rgba(0, 170, 230, 0.06);
    border: 1px solid #00aae6;
  }

  &:hover .react-toggle-thumb {
    border: 1px solid #00aae6;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track,
  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: ${uiColors('primary.main')};
    border: 1px solid ${uiColors('primary.main')};
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-thumb {
    border: 1px solid ${uiColors('primary.main')};
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }
`;

/** @component */
export default SwitchWrapper;
