import styled from 'styled-components';

const SingleDatePickerWrapper = styled.span`
  .SingleDatePickerInput {
    display: inline-block;
    background-color: #fff;
  }

  .SingleDatePickerInput__withBorder {
    border-radius: 2px;
    border: 1px solid #dbdbdb;
  }

  .SingleDatePickerInput__rtl {
    direction: rtl;
  }

  .SingleDatePickerInput__disabled {
    background-color: #f2f2f2;
  }

  .SingleDatePickerInput__block {
    display: block;
  }

  .SingleDatePickerInput__showClearDate {
    padding-right: 30px;
  }

  .SingleDatePickerInput_clearDate {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 5px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .SingleDatePickerInput_clearDate__default:focus,
  .SingleDatePickerInput_clearDate__default:hover {
    background: #dbdbdb;
    border-radius: 50%;
  }

  .SingleDatePickerInput_clearDate__small {
    padding: 6px;
  }

  .SingleDatePickerInput_clearDate__hide {
    visibility: hidden;
  }

  .SingleDatePickerInput_clearDate_svg {
    fill: #82888a;
    height: 12px;
    width: 15px;
    vertical-align: middle;
  }

  .SingleDatePickerInput_clearDate_svg__small {
    height: 9px;
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
    padding: 10px;
    margin: 0 5px 0 10px;
  }

  .SingleDatePickerInput_calendarIcon_svg {
    fill: #82888a;
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
    z-index: 1;
    background-color: #fff;
    position: absolute;
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
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .SingleDatePicker_picker__fullScreenPortal {
    background-color: #fff;
  }

  .SingleDatePicker_closeButton {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
  }

  .SingleDatePicker_closeButton:focus,
  .SingleDatePicker_closeButton:hover {
    color: darken(#cacccd, 10%);
    text-decoration: none;
  }

  .SingleDatePicker_closeButton_svg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
`;

export default SingleDatePickerWrapper;
