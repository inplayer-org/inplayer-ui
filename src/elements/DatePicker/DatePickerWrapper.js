import styled from 'styled-components';

import colors from 'config/colors';
import { uiColors, fontWeights, fontSizes } from 'utils';

const DatePickerWrapper = styled.span`
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

  .CalendarDay__button {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    box-sizing: border-box;
  }

  .CalendarDay__button:active {
    outline: 0;
  }

  .CalendarDay--highlighted-calendar {
    background: #ffe8bc;
    color: #565a5c;
    cursor: default;
  }

  .CalendarDay--highlighted-calendar:active {
    background: #007a87;
  }

  .CalendarDay--outside {
    border: 0;
    cursor: default;
  }

  .CalendarDay--outside:active {
    background: ${colors.white};
  }

  .CalendarDay--hovered {
    background: ${colors.accentBlueFade};
    color: ${colors.blue};
  }

  .CalendarDay--blocked-minimum-nights {
    color: #cacccd;
    background: ${colors.white};
    border: 1px solid #e4e7e7;
    cursor: default;
  }

  .CalendarDay--blocked-minimum-nights:active {
    background: ${colors.white};
  }

  .CalendarDay--selected-span {
    color: ${colors.accentBlue};
    background: ${colors.accentBlueFade};
  }

  .CalendarDay--selected-span.CalendarDay--hovered,
  .CalendarDay--selected-span:active {
    background: ${colors.accentBlueFade};
    color: ${colors.blue};
  }

  .CalendarDay--selected-span.CalendarDay--last-in-range {
    border-right: #00a699;
  }

  .CalendarDay--hovered-span,
  .CalendarDay--after-hovered-start {
    background: #b2f1ec;
    border: 1px double #80e8e0;
    color: #007a87;
  }

  .CalendarDay--hovered-span:active,
  .CalendarDay--after-hovered-start:active {
    background: #80e8e0;
  }

  .CalendarDay--selected-start,
  .CalendarDay--selected-end,
  .CalendarDay--selected {
    font-weight: ${fontWeights('normal')};
    color: ${colors.white};
    background: ${colors.accentBlue};
  }

  .CalendarDay--selected-start:active,
  .CalendarDay--selected-end:active,
  .CalendarDay--selected:active {
    background: #00a699;
  }

  .CalendarDay--blocked-calendar {
    background: #cacccd;
    color: #82888a;
    cursor: default;
  }

  .CalendarDay--blocked-calendar:active {
    background: #cacccd;
  }

  .CalendarDay--blocked-out-of-range {
    color: #cacccd;
    background: ${colors.white};
    border: 1px solid #e4e7e7;
    cursor: default;
  }

  .CalendarDay--blocked-out-of-range:active {
    background: ${colors.white};
  }

  .CalendarMonth {
    text-align: center;
    padding: 0 13px;
    vertical-align: top;
    user-select: none;
  }

  .CalendarMonth table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .CalendarMonth--horizontal {
    display: inline-block;
    min-height: 100%;
  }

  .CalendarMonth--vertical {
    display: block;
  }

  .CalendarMonth--horizontal:first-of-type,
  .CalendarMonth--vertical:first-of-type {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }

  .CalendarMonth__caption strong {
    margin-top: 7px;
    text-align: center;
    margin-bottom: 2px;
    caption-side: initial;
    font-size: ${fontSizes('h5')};
    line-height: 1.5em;
    font-weight: ${fontWeights('thin')};
    color: ${colors.blue};
  }

  .CalendarMonth--horizontal .CalendarMonth__caption,
  .CalendarMonth--vertical .CalendarMonth__caption {
    padding: 15px 0 50px;
  }

  .CalendarMonth--vertical-scrollable .CalendarMonth__caption {
    padding: 5px 0;
  }

  .CalendarMonthGrid {
    background: ${colors.white};
    z-index: 0;
    text-align: left;
  }

  .CalendarMonthGrid--animating {
    transition: transform 0.2s ease-in-out;
    z-index: 1;
  }

  .CalendarMonthGrid--horizontal {
    position: absolute;
    left: 9px;
  }

  .CalendarMonthGrid--vertical {
    margin: 0 auto;
  }

  .CalendarMonthGrid--vertical-scrollable {
    margin: 0 auto;
    overflow-y: scroll;
  }

  .DayPicker {
    background: ${colors.white};
    position: relative;
    text-align: left;
  }

  .DayPicker--horizontal {
    background: ${colors.white};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }

  .DayPicker--horizontal.DayPicker--portal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .DayPicker--vertical.DayPicker--portal {
    position: initial;
  }

  .DayPicker__focus-region {
    outline: none;
  }

  .DayPicker__week-headers {
    position: relative;
  }

  .DayPicker--horizontal .DayPicker__week-headers {
    margin-left: 9px;
  }

  .DayPicker__week-header {
    color: #757575;
    position: absolute;
    top: 66px;
    z-index: 2;
    padding: 0 13px;
    text-align: left;
  }

  .DayPicker__week-header ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
  }

  .DayPicker__week-header li {
    display: inline-block;
    text-align: center;
    color: #a0a3aa;
    font-size: ${fontSizes('medium')};
    font-weight: ${fontWeights('light')};
    line-height: 1.8em;
  }

  .DayPicker--vertical .DayPicker__week-header {
    left: 50%;
  }

  .DayPicker--vertical-scrollable {
    height: 100%;
  }

  .DayPicker--vertical-scrollable .DayPicker__week-header {
    top: 0;
    display: table-row;
    border-bottom: 1px solid #dbdbdb;
    background: white;
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .transition-container--vertical {
    width: 100%;
  }

  .DayPicker--vertical-scrollable .transition-container--vertical {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }

  .transition-container {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }

  .transition-container--horizontal {
    transition: height 0.2s ease-in-out;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: ${colors.white};
    border: 1px solid #d7dde5;
    border-radius: 3px;
    width: 623px;
  }

  .DayPickerNavigation__prev,
  .DayPickerNavigation__next {
    cursor: pointer;
    line-height: 0.78;
    user-select: none;
  }

  .DayPickerNavigation__prev--default,
  .DayPickerNavigation__next--default {
    border: 1px solid #dce0e0;
    background-color: ${colors.white};
    color: #757575;
  }

  .DayPickerNavigation__prev--default:focus,
  .DayPickerNavigation__prev--default:hover,
  .DayPickerNavigation__next--default:focus,
  .DayPickerNavigation__next--default:hover {
    border: 1px solid #c4c4c4;
  }

  .DayPickerNavigation__prev--default:active,
  .DayPickerNavigation__next--default:active {
    background: #f2f2f2;
  }

  .DayPickerNavigation--horizontal {
    position: relative;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev,
  .DayPickerNavigation--horizontal .DayPickerNavigation__next {
    border-radius: 2px;
    line-height: 20px;
    border: 1px solid #d7dde5;
    top: 18px;
    z-index: 2;
    position: absolute;
    padding: 5px 10px;
    cursor: pointer;
    transition: all ease 300ms;
    box-sizing: border-box;
  }

  .DayPickerNavigation--vertical-scrollable .DayPickerNavigation__next {
    width: 100%;
  }

  .DayPickerNavigation--vertical .DayPickerNavigation__prev,
  .DayPickerNavigation--vertical .DayPickerNavigation__next {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 50%;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__next {
    right: 16px;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev {
    left: 22px;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev:hover,
  .DayPickerNavigation--horizontal .DayPickerNavigation__next:hover {
    border-color: #00aae6;
    color: #00aae6;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__next:hover {
    padding-left: 12px;
    padding-right: 8px;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev:hover {
    padding-right: 12px;
    padding-left: 8px;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev--rtl {
    left: auto;
    right: 22px;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__next--rtl {
    right: auto;
    left: 16px;
  }

  .DayPickerKeyboardShortcuts__close svg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev--default svg,
  .DayPickerNavigation--horizontal .DayPickerNavigation__next--default svg {
    height: 19px;
    width: 19px;
    fill: #82888a;
  }

  .DayPickerNavigation--vertical .DayPickerNavigation__prev--default svg,
  .DayPickerNavigation--vertical .DayPickerNavigation__next--default svg {
    height: 42px;
    width: 42px;
    fill: #484848;
  }

  .DayPickerKeyboardShortcuts__close svg:hover,
  .DayPickerKeyboardShortcuts__close svg:focus {
    fill: #82888a;
  }

  .DayPickerNavigation--horizontal .DayPickerNavigation__prev--default:hover svg,
  .DayPickerNavigation--horizontal .DayPickerNavigation__next--default:hover svg {
    fill: #00aae6;
  }

  .DayPickerNavigation--vertical {
    background: ${colors.white};
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 52px;
    width: 100%;
    z-index: 2;
  }

  .DayPickerNavigation--vertical .DayPickerNavigation__next--default {
    border-left: 0;
  }

  .DayPickerNavigation--vertical .DayPickerNavigation__prev--default,
  .DayPickerNavigation--vertical .DayPickerNavigation__next--default {
    text-align: center;
    font-size: ${fontSizes('small')};
    padding: 5px;
  }

  .DayPickerNavigation--vertical-scrollable {
    position: relative;
  }

  .DayPickerKeyboardShortcuts__show,
  .DayPickerKeyboardShortcuts__close {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
  }

  .DayPickerKeyboardShortcuts__close {
    position: absolute;
    right: 22px;
    top: 22px;
    z-index: 2;
  }

  .DayPickerKeyboardShortcuts__show {
    width: 22px;
    position: absolute;
    z-index: 2;
  }

  .DayPickerKeyboardShortcuts__show:active,
  .DayPickerKeyboardShortcuts__close:active {
    outline: none;
  }

  .DayPickerKeyboardShortcuts__show_span {
    color: ${colors.white};
    position: absolute;
  }

  .DayPickerKeyboardShortcuts__show--bottom-right {
    display: none;
  }

  .DayPickerKeyboardShortcuts__show--bottom-right:hover {
    border-right: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts__show--bottom-right .DayPickerKeyboardShortcuts__show_span {
    bottom: 0;
    right: -28px;
  }

  .DayPickerKeyboardShortcuts__show--top-right {
    border-bottom: 26px solid transparent;
    border-right: 33px solid #00a699;
    top: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts__show--top-right:hover {
    border-right: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts__show--top-right .DayPickerKeyboardShortcuts__show_span {
    top: 1px;
    right: -28px;
  }

  .DayPickerKeyboardShortcuts__show--top-left {
    border-bottom: 26px solid transparent;
    border-left: 33px solid #00a699;
    top: 0;
    left: 0;
  }

  .DayPickerKeyboardShortcuts__show--top-left:hover {
    border-left: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts__show--top-left .DayPickerKeyboardShortcuts__show_span {
    top: 1px;
    left: -28px;
  }

  .DayPickerKeyboardShortcuts__panel {
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

  .DayPickerKeyboardShortcuts__title {
    font-size: ${fontSizes('small')};
    font-weight: ${fontWeights('normal')};
    margin: 0;
  }

  .DayPickerKeyboardShortcuts__list {
    list-style: none;
    padding: 0;
  }

  .DayPickerKeyboardShortcuts__close:active {
    outline: none;
  }

  .DayPickerKeyboardShortcuts__panel--block .KeyboardShortcutRow {
    margin-bottom: 16px;
  }

  .DayPickerKeyboardShortcuts__panel--block .KeyboardShortcutRow__key-container {
    width: auto;
    display: inline;
  }

  .DayPickerKeyboardShortcuts__panel--block .KeyboardShortcutRow__action {
    display: inline;
  }

  .DateInput {
    display: inline-block;
    padding: 0 10px;
    font-weight: ${fontWeights('light')};
    font-size: ${fontSizes('medium')};
    line-height: 28px;
    color: ${colors.fontDarkGray};
    margin: 0;
    background: transparent;
    vertical-align: middle;
  }

  .DateInput--with-caret::before,
  .DateInput--with-caret::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: auto;
    border: 10px solid transparent;
    left: 22px;
    z-index: 2;
  }

  .DateInput--open-up.DateInput--with-caret::before,
  .DateInput--open-up.DateInput--with-caret::after {
    border-bottom: 0;
  }

  .DateInput--open-up.DateInput--with-caret::before {
    top: -24px;
    border-top-color: ${colors.lightGray};
  }

  .DateInput--open-up.DateInput--with-caret::after {
    top: -25px;
    border-top-color: ${colors.white};
  }

  .DateInput--disabled {
    background: #cacccd;
  }

  .DateInput__input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    height: 100%;
    width: 100%;
  }

  .DateInput__input[readonly] {
    user-select: none;
  }

  .DateInput__display-text {
    padding: 4px 8px;
    white-space: nowrap;
    overflow: hidden;
  }

  .DateInput__display-text--focused {
    border-bottom: 2px solid ${colors.accentBlue};
  }

  .DateInput__display-text--disabled {
    font-style: italic;
  }

  .screen-reader-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .DateRangePicker {
    position: relative;
    display: inline-block;
  }

  .DateRangePicker__picker {
    z-index: 1;
    background-color: ${colors.white};
    position: absolute;
  }

  .DateRangePicker__picker--rtl {
    direction: rtl;
  }

  .DateRangePicker__picker--direction-left {
    left: 0;
  }

  .DateRangePicker__picker--direction-right {
    right: 0;
  }

  .DateRangePicker__picker--open-up {
    bottom: 72px;
  }

  .DateRangePicker__picker--portal {
    background-color: ${colors.ligthGraj};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .DateRangePicker__picker--full-screen-portal {
    background-color: ${colors.white};
  }

  .DateRangePickerInput {
    background-color: ${colors.white};
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid ${colors.gray};
    border-radius: 3px;
  }

  .DateRangePickerInput--disabled {
    background: ${colors.lightGray};
  }

  .DateRangePickerInput--rtl {
    direction: rtl;
  }

  .DateRangePickerInput__arrow {
    display: inline-block;
    vertical-align: middle;
    color: ${colors.fontGray};
    font-weight: ${fontWeights('light')};
    font-size: ${fontSizes('small')};
    line-height: 16px;
    padding: 5px 10px;
  }
`;

export default DatePickerWrapper;
