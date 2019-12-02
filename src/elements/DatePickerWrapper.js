import styled from 'styled-components';
import { transparentize } from 'polished';

import colors from 'config/colors';
import { uiColors, fontWeights, fontSizes } from 'utils';

const DatePickerWrapper = styled.span`
  .PresetDateRangePicker_panel {
    padding: 0 1.375rem 0.6875rem;
  }

  .PresetDateRangePicker_button {
    position: relative;
    height: 100%;
    text-align: center;
    background: 0 0;
    color: ${uiColors('primary.main')};
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    font: inherit;
    font-weight: ${fontWeights('bold')};
    line-height: normal;
    overflow: visible;
    cursor: pointer;
  }

  .PresetDateRangePicker_button:active {
    outline: 0;
  }

  .PresetDateRangePicker_button__selected {
    color: ${colors.white};
    background: ${uiColors('primary.main')};
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .CalendarDay {
    padding: 0.0625rem;
    box-sizing: border-box;
    height: 37px;
    width: 37px;
    color: ${uiColors('text.main')};
    text-align: center;
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
    border: 1px solid ${colors.gray};
    color: ${uiColors('text.main')};
    background: ${colors.white};
  }

  .CalendarDay__default:hover {
    background: rgba(0, 170, 230, 0.06);
    color: ${colors.navy};
  }

  .CalendarDay__hovered_offset {
    background: ${colors.lightGray};
    border: 1px double ${colors.lightGray};
    color: inherit;
  }

  .CalendarDay__selected_span {
    color: ${uiColors('primary.main')};
    background: ${transparentize(0.94, colors.lightSkyBlue)};
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${transparentize(0.94, colors.lightSkyBlue)};
    color: ${colors.navy};
  }

  .CalendarDay__last_in_range,
  .CalendarDay__last_in_range:hover {
    border-style: solid;
  }

  .CalendarDay__selected {
    background: ${uiColors('primary.main')};
    color: ${colors.white};
    font-weight: 500;
    cursor: pointer;
  }

  .CalendarDay__selected:hover {
    background: rgba(151, 204, 246, 0.06);
    color: #2a4d8e;
    border: 1px solid ${colors.gray};
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    border: 1px double ${colors.gray};
    color: ${uiColors('primary.main')};
    background: ${transparentize(0.94, colors.lightSkyBlue)};
  }

  .CalendarDay__hovered_span:active {
    border: 1px double ${colors.gray};
    color: ${uiColors('primary.main')};
    background: ${transparentize(0.94, colors.lightSkyBlue)};
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: ${colors.lightGray};
    border: 1px solid ${colors.lightGray};
    color: ${uiColors('text.disabled')};
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    background: ${colors.white};
    border: 1px solid ${colors.lightGray};
    color: ${uiColors('text.disabled')};
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
    color: ${colors.navy};
    font-size: ${fontSizes('h6')};
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 3.125rem;
    font-weight: ${fontWeights('light')} !important;
  }

  .CalendarMonth_caption strong {
    font-weight: ${fontWeights('light')} !important;
  }

  .CalendarMonth_caption__verticalScrollable {
    padding-top: 0.75rem;
    padding-bottom: 0.4375rem;
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
    background-color: ${colors.white};
  }

  .DayPickerNavigation_button__default:hover {
    border-color: ${uiColors('primary.main')};
  }

  .DayPickerNavigation_button__default:hover svg {
    fill: ${uiColors('primary.main')};
  }

  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 18px;
    line-height: 0.78;
    border-radius: 3px;
    padding: 0.375rem 0.5625rem;
  }

  .DayPickerNavigation_leftButton__horizontalDefault,
  .DayPickerNavigation_rightButton__horizontalDefault {
    border: 1px solid ${colors.gray};
    color: ${colors.darkGray};
    transition: all ease 300ms;
  }

  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 22px;
  }

  .DayPickerNavigation_rightButton__horizontalDefault {
    right: 22px;
  }

  .DayPickerNavigation_button__verticalDefault {
    padding: 0.3125rem;
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

  .DayPickerNavigation_rightButton__horizontalDefault:hover {
    padding-left: 0.75rem;
    padding-right: 0.5rem;
  }

  .DayPickerNavigation_leftButton__horizontalDefault:hover {
    padding-right: 0.75rem;
    padding-left: 0.5rem;
  }

  .DayPickerNavigation_svg__horizontal {
    height: 19px;
    width: 19px;
    fill: ${colors.darkGray};
    display: block;
  }

  .DayPickerNavigation_svg__vertical {
    height: 42px;
    width: 42px;
    fill: ${colors.darkGray};
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
    color: ${uiColors('text.light')};
    font-size: ${fontSizes('medium')};
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
    padding: 0 0.8125rem;
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
    margin: 0.0625rem 0;
    padding-left: 0;
    padding-right: 0;
    font-size: ${fontSizes('medium')};
    font-weight: ${fontWeights('light')};
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
    padding-top: 1.25rem;
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
    width: 85px;
    vertical-align: middle;
  }

  .DateInput__small {
    width: 97px;
  }

  .DateInput__block {
    width: 100%;
  }

  .DateInput__disabled {
    background: ${colors.lightGray};
    color: ${uiColors('text.disabled')};
  }

  .DateInput_input {
    font-weight: ${fontWeights('thin')};
    background-color: ${colors.white};
    width: 100%;
    padding: 0 0.3125rem;
    border: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid transparent;
    border-left: 0;
    border-radius: 0;
    display: inline-block;
    font-size: ${fontSizes('medium')};
    line-height: 28px;
    cursor: pointer;
    color: ${uiColors('text.main')};
    text-align: center;
  }

  .DateInput_input__small {
    font-size: ${fontSizes('small')};
    line-height: 18px;
    letter-spacing: 0.2px;
    padding: 0.4375rem 0.4375rem 0.3125rem;
  }

  .DateInput_input__regular {
    font-weight: auto;
  }

  .DateInput_input__readOnly {
    user-select: none;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid ${uiColors('primary.main')};
  }

  .DateInput_input__disabled {
    background: ${colors.lightGray};
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
    padding: 0.3125rem 0.625rem;
    box-sizing: border-box;
    background: ${colors.white};
    border: 1px solid ${colors.gray};
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    position: relative;
  }

  .DateRangePickerInput__disabled {
    background: ${colors.lightGray};
  }

  .DateRangePickerInput__withBorder {
    border-radius: 3px;
    border: 1px solid ${colors.gray};
  }

  .DateRangePickerInput__rtl {
    direction: rtl;
  }

  .DateRangePickerInput__block {
    display: block;
  }

  .DateRangePickerInput__showClearDates {
    padding-right: 1.875rem;
  }

  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    padding: 0.3125rem 0.625rem;
    font-size: ${fontSizes('small')};
    line-height: 1rem;
    color: ${uiColors('text.light')};
    font-weight: ${fontWeights('light')};
  }

  .DateRangePicker {
    position: relative;
    display: inline-block;
  }

  .DateRangePicker__block {
    display: block;
  }

  .DateRangePicker_picker {
    z-index: 10;
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
    background-color: ${colors.lightGray};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .DateRangePicker_picker__fullScreenPortal {
    background-color: ${colors.white};
  }

  .SingleDatePicker_picker {
    z-index: 9;
  }
`;

export default DatePickerWrapper;
