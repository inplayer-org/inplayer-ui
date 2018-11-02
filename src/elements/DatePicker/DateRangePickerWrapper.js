import styled from 'styled-components';

import { uiColors, fontSizes, fontWeights } from 'utils';

const DateRangePickerWrapper = styled.span`
  .datepreset {
    width: 96px;
    padding: 64px 20px 10px;

    label {
      display: block;
      color: ${uiColors('text.light')};
      font-size: ${fontSizes('small')};
      transition: ease 200ms color;
      cursor: pointer;
      font-weight: ${fontWeights('light')};
      padding: 7px;

      &:hover {
        color: ${uiColors('text.main')};
      }
    }

    label.active {
      color: ${uiColors('primary.dark')};

      &::before {
        height: 6px;
        width: 6px;
        content: '';
        display: inline-block;
        border-right: 1px solid ${uiColors('primary.dark')};
        border-top: 1px solid ${uiColors('primary.dark')};
        transform: rotate(45deg);
        margin-right: 8px;
        position: relative;
        top: -2px;
      }
    }
  }
`;

export default DateRangePickerWrapper;
