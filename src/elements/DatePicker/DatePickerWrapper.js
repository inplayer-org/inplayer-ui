import styled from 'styled-components';

import colors from 'config/colors';
import { uiColors, fontWeights, fontSizes } from 'utils';

const DatePickerWrapper = styled.span`
  .PresetDateRangePicker_panel {
    padding: 0 22px 11px;
  }

  .PresetDateRangePicker_button {
    position: relative;
    height: 100%;
    text-align: center;
    background: 0 0;
    border: 2px solid #00a699;
    color: #00a699;
    padding: 4px 12px;
    margin-right: 8px;
    font: inherit;
    font-weight: 700;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
  }

  .PresetDateRangePicker_button:active {
    outline: 0;
  }

  .PresetDateRangePicker_button__selected {
    color: ${colors.white};
    background: #00a699;
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    background: 0 0;
    border: 0;
    border-radius: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
  }

  .DayPickerKeyboardShortcuts_buttonReset:active {
    outline: 0;
  }

  .DayPickerKeyboardShortcuts_show {
    width: 22px;
    position: absolute;
    z-index: 2;
  }

  .DayPickerKeyboardShortcuts_show__topRight {
    border-bottom: 26px solid transparent;
    border-right: 33px solid #00a699;
    top: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts_show__topRight:hover {
    border-right: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts_show__topLeft {
    border-bottom: 26px solid transparent;
    border-left: 33px solid #00a699;
    top: 0;
    left: 0;
  }

  .DayPickerKeyboardShortcuts_show__topLeft:hover {
    border-left: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts_showSpan {
    color: ${colors.white};
    position: absolute;
  }

  .DayPickerKeyboardShortcuts_showSpan__bottomRight {
    bottom: 0;
    right: -28px;
  }

  .DayPickerKeyboardShortcuts_showSpan__topRight {
    top: 1px;
    right: -28px;
  }

  .DayPickerKeyboardShortcuts_showSpan__topLeft {
    top: 1px;
    left: -28px;
  }

  .DayPickerKeyboardShortcuts_panel {
    overflow: auto;
    background: ${colors.white};
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding: 22px;
    margin: 33px;
  }

  .DayPickerKeyboardShortcuts_title {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  .DayPickerKeyboardShortcuts_list {
    list-style: none;
    padding: 0;
    font-size: 14px;
  }

  .CalendarDay {
    padding: 1px;
    box-sizing: border-box;
    height: 37px;
    color: ${uiColors('text.main')};
    text-align: center;
    width: 37px;
    font-size: ${fontSizes('small')};
    line-height: 32px;
    margin: 0;
    border: 1px solid ${colors.gray};
    font-weight: ${fontWeights('light')};
    cursor: pointer;
  }

  .CalendarDay:active {
    outline: 0;
  }

  .CalendarDay__defaultCursor {
    cursor: default;
  }

  .CalendarDay__default {
    border: 1px solid #d7dde5;
    color: #44494e;
    background: ${colors.white};
  }

  .CalendarDay__default:hover {
    background: rgba(0, 170, 230, 0.06);
    color: #2a4d8e;
  }

  .CalendarDay__hovered_offset {
    background: #f4f5f5;
    border: 1px double #e4e7e7;
    color: inherit;
  }

  .CalendarDay__outside {
    border: 0;
    background: ${colors.white};
    color: #484848;
  }

  .CalendarDay__outside:hover {
    border: 0;
  }

  .CalendarDay__blocked_minimum_nights {
    background: ${colors.white};
    border: 1px solid #eceeee;
    color: #cacccd;
  }

  .CalendarDay__blocked_minimum_nights:active,
  .CalendarDay__blocked_minimum_nights:hover {
    background: ${colors.white};
    color: #cacccd;
  }

  .CalendarDay__highlighted_calendar {
    background: #ffe8bc;
    color: #484848;
  }

  .CalendarDay__highlighted_calendar:active,
  .CalendarDay__highlighted_calendar:hover {
    background: #ffce71;
    color: #484848;
  }

  .CalendarDay__selected_span {
    color: ${colors.accentBlue};
    background: ${colors.accentBlueFade};
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${colors.accentBlueFade};
    color: ${colors.blue};
  }

  .CalendarDay__last_in_range,
  .CalendarDay__last_in_range:hover {
    border-style: solid;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: #00a699;
    border: 1px double #00a699;
    color: ${colors.white};
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: #b2f1ec;
    border: 1px double #80e8e0;
    color: #007a87;
  }

  .CalendarDay__hovered_span:active {
    background: #80e8e0;
    border: 1px double #80e8e0;
    color: #007a87;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: #cacccd;
    border: 1px solid #cacccd;
    color: #82888a;
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    background: ${colors.white};
    border: 1px solid #e4e7e7;
    color: #cacccd;
  }

  .CalendarMonth {
    background: ${colors.white};
    text-align: center;
    vertical-align: top;
    user-select: none;
  }

  .CalendarMonth_table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .CalendarMonth_verticalSpacing {
    border-collapse: separate;
  }

  .CalendarMonth_caption {
    color: #2a4d8e;
    font-size: 24px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 48px;
    caption-side: initial;
    font-weight: 100 !important;
  }

  .CalendarMonth_caption strong {
    font-weight: 100 !important;
  }

  .CalendarMonth_caption__verticalScrollable {
    padding-top: 12px;
    padding-bottom: 7px;
  }

  .CalendarMonthGrid {
    background: ${colors.white};
    text-align: left;
    z-index: 0;
  }

  .CalendarMonthGrid__animating {
    z-index: 1;
  }

  .CalendarMonthGrid__horizontal {
    position: absolute;
    left: 9px;
  }

  .CalendarMonthGrid__vertical {
    margin: 0 auto;
  }

  .CalendarMonthGrid__vertical_scrollable {
    margin: 0 auto;
    overflow-y: scroll;
  }

  .CalendarMonthGrid_month__horizontal {
    display: inline-block;
    vertical-align: top;
    min-height: 100%;
  }

  .CalendarMonthGrid_month__hideForAnimation {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }

  .CalendarMonthGrid_month__hidden {
    visibility: hidden;
  }

  .DayPickerNavigation {
    position: relative;
    z-index: 2;
  }

  .DayPickerNavigation__horizontal {
    height: 0;
  }

  .DayPickerNavigation__verticalDefault {
    position: absolute;
    width: 100%;
    height: 52px;
    bottom: 0;
    left: 0;
  }

  .DayPickerNavigation__verticalScrollableDefault {
    position: relative;
  }

  .DayPickerNavigation_button {
    cursor: pointer;
    user-select: none;
    border: 0;
    padding: 0;
    margin: 0;
  }

  .DayPickerNavigation_button__default {
    border: 1px solid #e4e7e7;
    background-color: ${colors.white};
    color: #757575;
  }

  .DayPickerNavigation_button__default:hover {
    border-color: #00aae6;
  }

  .DayPickerNavigation_button__default:hover svg {
    fill: #00aae6;
  }

  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 18px;
    line-height: 0.78;
    border-radius: 3px;
    padding: 6px 9px;
  }

  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 22px;
    border: 1px solid #d7dde5;
    color: #b9c1cb;
  }

  .DayPickerNavigation_rightButton__horizontalDefault {
    right: 22px;
  }

  .DayPickerNavigation_button__verticalDefault {
    padding: 5px;
    background: ${colors.white};
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 50%;
  }

  .DayPickerNavigation_nextButton__verticalDefault {
    border-left: 0;
  }

  .DayPickerNavigation_nextButton__verticalScrollableDefault {
    width: 100%;
  }

  .DayPickerNavigation_svg__horizontal {
    height: 19px;
    width: 19px;
    fill: #b9c1cb;
    display: block;
  }

  .DayPickerNavigation_svg__vertical {
    height: 42px;
    width: 42px;
    fill: #484848;
  }

  .DayPicker {
    background: ${colors.white};
    position: relative;
    text-align: left;
  }

  .DayPicker__horizontal {
    background: ${colors.white};
  }

  .DayPicker__verticalScrollable {
    height: 100%;
  }

  .DayPicker__hidden {
    visibility: hidden;
  }

  .DayPicker__withBorder {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  .DayPicker_portal__horizontal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .DayPicker_portal__vertical {
    position: initial;
  }

  .DayPicker_focusRegion {
    outline: 0;
  }

  .DayPicker_calendarInfo__horizontal,
  .DayPicker_wrapper__horizontal {
    display: inline-block;
    vertical-align: top;
  }

  .DayPicker_weekHeaders {
    position: relative;
  }

  .DayPicker_weekHeaders__horizontal {
    margin-left: 9px;
  }

  .DayPicker_weekHeader {
    color: #a0a3aa;
    font-size: 14px;
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
    padding: 0 13px;
  }

  .DayPicker_weekHeader__vertical {
    left: 50%;
  }

  .DayPicker_weekHeader__verticalScrollable {
    top: 0;
    display: table-row;
    border-bottom: 1px solid #dbdbdb;
    background: ${colors.white};
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .DayPicker_weekHeader_ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 17px;
    font-weight: 300;
  }

  .DayPicker_weekHeader_li {
    display: inline-block;
    text-align: center;
  }

  .DayPicker_transitionContainer {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }

  .DayPicker_transitionContainer__horizontal {
    transition: height 0.2s ease-in-out;
  }

  .DayPicker_transitionContainer__vertical {
    width: 100%;
  }

  .DayPicker_transitionContainer__verticalScrollable {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }

  .DateInput {
    margin: 0;
    padding: 0;
    background: ${colors.white};
    position: relative;
    display: inline-block;
    width: 80px;
    vertical-align: middle;
  }

  .DateInput__small {
    width: 97px;
  }

  .DateInput__block {
    width: 100%;
  }

  .DateInput__disabled {
    background: #f2f2f2;
    color: #dbdbdb;
  }

  .DateInput_input {
    font-weight: 200;
    background-color: ${colors.white};
    width: 100%;
    padding: 0 5px;
    border: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid transparent;
    border-left: 0;
    border-radius: 0;
    display: inline-block;
    font-size: 16px;
    line-height: 28px;
    cursor: pointer;
    color: #44494e;
  }

  .DateInput_input__small {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.2px;
    padding: 7px 7px 5px;
  }

  .DateInput_input__regular {
    font-weight: auto;
  }

  .DateInput_input__readOnly {
    user-select: none;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid #00aae6;
  }

  .DateInput_input__disabled {
    background: #f2f2f2;
    font-style: italic;
  }

  .DateInput_screenReaderMessage {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .DateInput_fang {
    display: none;
  }

  .DateRangePickerInput {
    padding: 5px 10px;
    box-sizing: border-box;
    background: ${colors.white};
    border: 1px solid #d7dde5;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    position: relative;
  }

  .DateRangePickerInput__disabled {
    background: #f2f2f2;
  }

  .DateRangePickerInput__withBorder {
    border-radius: 3px;
    border: 1px solid #d7dde5;
  }

  .DateRangePickerInput__rtl {
    direction: rtl;
  }

  .DateRangePickerInput__block {
    display: block;
  }

  .DateRangePickerInput__showClearDates {
    padding-right: 30px;
  }

  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    padding: 5px 10px;
    margin-left: 3px;
    font-size: 14px;
    line-height: 16px;
    color: #a0a3aa;
    font-weight: 300;
  }

  .DateRangePickerInput_arrow_svg {
    vertical-align: middle;
    fill: #484848;
    height: 24px;
    width: 24px;
  }

  .DateRangePickerInput_calendarIcon {
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

  .DateRangePickerInput_calendarIcon_svg {
    fill: #82888a;
    height: 15px;
    width: 14px;
    vertical-align: middle;
  }

  .DateRangePicker {
    position: relative;
    display: inline-block;
  }

  .DateRangePicker__block {
    display: block;
  }

  .DateRangePicker_picker {
    z-index: 1;
    background-color: ${colors.white};
    position: absolute;
    top: 43px !important;
  }

  .DateRangePicker_picker__rtl {
    direction: rtl;
  }

  .DateRangePicker_picker__directionLeft {
    left: 0;
  }

  .DateRangePicker_picker__directionRight {
    right: 0;
  }

  .DateRangePicker_picker__portal {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .DateRangePicker_picker__fullScreenPortal {
    background-color: ${colors.white};
  }

  .datepreset {
    width: 96px;
    padding: 64px 20px 10px;

    label {
      display: block;
      color: #a0a3aa;
      font-size: 15px;
      transition: ease 200ms color;
      cursor: pointer;
      font-weight: 300;
      padding: 5px;

      &:hover {
        color: #44494e;
      }

      .active {
        color: #2a4d8e;

        &::before {
          height: 6px;
          width: 6px;
          content: '';
          display: inline-block;
          border-right: 1px solid #2a4d8e;
          border-top: 1px solid #2a4d8e;
          transform: rotate(45deg);
          margin-right: 8px;
          position: relative;
          top: -2px;
        }
      }
    }
  }
`;

export default DatePickerWrapper;
