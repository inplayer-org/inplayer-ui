import styled from 'styled-components';

import colors from '../../theme/colors';
import DatePickerWrapper from '../DatePicker/DatePickerWrapper';

const DayPickerWrapper = styled(DatePickerWrapper)`
  .DateInput {
    width: 100px !important;
  }

  .DateInput_input {
    text-align: center;
    padding: 0;
  }

  .CalendarDay__selected:hover {
    background: ${colors.skyBlue};
    color: ${colors.white};
  }

  .SingleDatePickerInput {
    display: inline-block;
    background-color: ${colors.white};
  }

  .SingleDatePickerInput__withBorder {
    border-radius: 2px;
    border: 1px solid ${colors.gray};
  }

  .SingleDatePickerInput__rtl {
    direction: rtl;
  }

  .SingleDatePickerInput__disabled {
    background-color: ${colors.lightGray};
  }

  .SingleDatePickerInput__block {
    display: block;
  }

  .SingleDatePickerInput__showClearDate {
    padding-right: 1.875rem;
  }

  .SingleDatePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    padding: 0.625rem;
    margin: 0 0.5rem;
  }

  .SingleDatePickerInput_calendarIcon_svg {
    fill: ${colors.darkGray};
    height: 15px;
    width: 14px;
    vertical-align: middle;
  }

  .SingleDatePicker {
    position: relative;
    display: inline-block;
  }

  .SingleDatePicker__block {
    display: block;
  }

  .SingleDatePicker_picker {
    z-index: 10;
    background-color: ${colors.white};
    position: absolute;
    top: 35px !important;
  }

  .SingleDatePicker_picker__rtl {
    direction: rtl;
  }

  .SingleDatePicker_picker__directionLeft {
    left: 0;
  }

  .SingleDatePicker_picker__directionRight {
    right: 0;
  }

  .SingleDatePicker_picker__portal {
    background-color: ${colors.lightGray};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .SingleDatePicker_picker__fullScreenPortal {
    background-color: #fff;
  }
`;

export default DayPickerWrapper;
