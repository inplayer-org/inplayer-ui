// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';

// components
import { fontSizes, fontWeights } from 'utils';
import Label from '../Label';
import DatePickerWrapper from '../DatePickerWrapper';

const StyledLabel = styled(Label)`
  display: block;
  font-size: ${fontSizes('small')};
  transition: ease 200ms color;
  cursor: pointer;
  font-weight: ${ifProp('active', fontWeights('normal'), fontWeights('light'))};
  padding: 0.4375rem;

  &:hover {
    color: ${colors.navy} !important;
  }

  color: ${ifProp('active', colors.navy, colors.fontGray)};
`;

const DatePresetWrapper = styled.div`
  width: 96px;
  padding: 3.75rem 1.25rem 0.625rem;
`;

const THIS_WEEK = 'this week';
const LAST_WEEK = 'last week';
const LAST_TWO_WEEKS = 'last 2 weeks';
const THIS_MONTH = 'this month';
const LAST_MONTH = 'last month';
const THIS_YEAR = 'this year';
const LAST_SIX_MONTHS = 'last 6 months';
const ALL_TIME = 'all time';
const CUSTOM = 'custom date preset';

type Props = {
  startDate: Moment,
  endDate?: Moment,
  startDateId?: string,
  endDateId?: string,
  isOutsideRange?: Function,
  onDateChange: Function,
  style?: Object,
  className?: string,
  onFocusChange: Function,
  focusedInput: FocusedInputShape | null,
  minimumNights?: number,
  displayPresets?: Array,
  customAllTimeDate?: number,
  activePeriodPreset?: string,
};

type Period =
  | THIS_WEEK
  | LAST_WEEK
  | LAST_TWO_WEEKS
  | THIS_MONTH
  | LAST_MONTH
  | LAST_SIX_MONTHS
  | THIS_YEAR
  | ALL_TIME
  | CUSTOM;

class DatePicker extends React.Component<Props> {
  state = {
    activePeriod: '',
  };

  componentDidMount() {
    const { activePeriodPreset } = this.props;
    this.setState({ activePeriod: activePeriodPreset });
  }

  handleRangeClick = (period: Period) => {
    const { customAllTimeDate } = this.props;
    this.setState({ activePeriod: period });
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    const allTimeStartDate = customAllTimeDate
      ? moment(customAllTimeDate * 1000)
      : startDate.subtract(3, 'year');

    switch (period) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case LAST_TWO_WEEKS:
        startDate = startDate.subtract(14, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case LAST_SIX_MONTHS:
        startDate = startDate.subtract(6, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      case ALL_TIME:
        startDate = allTimeStartDate;
        break;
      default:
        break;
    }
    const { onDateChange } = this.props;
    onDateChange({ startDate, endDate });
  };

  renderDatePresets = () => {
    const { displayPresets } = this.props;
    const { activePeriod } = this.state;

    let presets = [];
    if (displayPresets.includes('default')) {
      presets = [THIS_WEEK, LAST_WEEK, THIS_MONTH, LAST_MONTH, THIS_YEAR];
    } else {
      presets = [...displayPresets];
    }

    return (
      <DatePresetWrapper>
        {presets.map((text) => (
          <StyledLabel
            active={activePeriod === text}
            key={text}
            onClick={() => this.handleRangeClick(text)}
          >
            {text}
          </StyledLabel>
        ))}
      </DatePresetWrapper>
    );
  };

  handleDateChange = ({ startDate, endDate }) => {
    const { onDateChange } = this.props;
    this.setState({ activePeriod: CUSTOM });
    onDateChange({ startDate, endDate });
  };

  render() {
    const {
      startDate,
      endDate,
      displayPresets,
      startDateId,
      endDateId,
      isOutsideRange,
      style,
      className,
      onFocusChange,
      focusedInput,
      minimumNights,
    } = this.props;

    const hasPresets = displayPresets.length !== 0;
    return (
      <DatePickerWrapper style={style} className={className}>
        <DateRangePicker
          isOutsideRange={isOutsideRange}
          onDatesChange={this.handleDateChange}
          onFocusChange={onFocusChange}
          renderCalendarInfo={this.renderDatePresets}
          focusedInput={focusedInput}
          startDate={startDate}
          startDateId={startDateId || 'startDate'}
          endDate={endDate}
          endDateId={endDateId || 'endDate'}
          customArrowIcon="to"
          readOnly
          calendarInfoPosition={hasPresets && 'before'}
          minimumNights={minimumNights}
          enableOutsideDays
        />
      </DatePickerWrapper>
    );
  }
}

DatePicker.defaultProps = {
  endDate: null,
  startDateId: 'startDate',
  endDateId: 'endDate',
  calendarInfo: false,
  isOutsideRange: () => false,
  style: {},
  className: '',
  minimumNights: 0,
  displayPresets: [],
  customAllTimeDate: moment().startOf('day').subtract(3, 'year'),
  activePeriodPreset: '',
};

export default DatePicker;
