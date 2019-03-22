import styled from 'styled-components';

import { uiColors, fontSizes, fontWeights } from 'utils';
import DatePickerWrapper from '../DatePickerWrapper';

const DateRangePickerWrapper = styled(DatePickerWrapper)`
  .datepreset {
    width: 96px;
    padding: 3.75rem 1.25rem 0.625rem;

    label {
      display: block;
      color: ${uiColors('text.light')};
      font-size: ${fontSizes('small')};
      transition: ease 200ms color;
      cursor: pointer;
      font-weight: ${fontWeights('light')};
      padding: 0.4375rem;

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
        margin-right: 0.5rem;
        position: relative;
        top: -2px;
      }
    }
  }
`;

export default DateRangePickerWrapper;
