import React from 'react';
import 'react-dates/initialize';
import { FocusedInputShape, DateRangePicker } from 'react-dates';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'theme/colors';
import { fontSizes, fontWeights } from 'utils';
import Label from '../Label';
import DatePickerWrapper from '../DatePickerWrapper';
import { PERIODS } from './periods';

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

interface DateChangeArgs {
  startDate: Moment | null;
  endDate: Moment | null;
}

type Props = {
  startDate: Moment | null;
  endDate: Moment | null;
  startDateId?: string;
  endDateId?: string;
  isOutsideRange?: (day: any) => boolean;
  onDateChange(arg: DateChangeArgs): void;
  style?: Record<string, any>;
  className?: string;
  onFocusChange(focused: FocusedInputShape | null): void;
  focusedInput: FocusedInputShape | null;
  minimumNights?: number;
  displayPresets: Array<string>;
  customAllTimeDate?: number;
  activePeriodPreset?: string;
};

type Period =
  | 'this week'
  | 'last week'
  | 'last 2 weeks'
  | 'this month'
  | 'last month'
  | 'last 6 months'
  | 'this year'
  | 'all time'
  | 'custom date preset';

class DatePicker extends React.Component<Props> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    endDate: null,
    startDateId: 'startDate',
    endDateId: 'endDate',
    calendarInfo: false,
    isOutsideRange: () => false,
    style: {},
    className: '',
    minimumNights: 0,
    displayPresets: [],
    customAllTimeDate: moment()
      .startOf('day')
      .subtract(3, 'year'),
    activePeriodPreset: '',
  };

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
      case PERIODS.THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case PERIODS.LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case PERIODS.LAST_TWO_WEEKS:
        startDate = startDate.subtract(14, 'days');
        break;
      case PERIODS.THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case PERIODS.LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case PERIODS.LAST_SIX_MONTHS:
        startDate = startDate.subtract(6, 'months');
        break;
      case PERIODS.THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      case PERIODS.ALL_TIME:
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
      presets = [
        PERIODS.THIS_WEEK,
        PERIODS.LAST_WEEK,
        PERIODS.THIS_MONTH,
        PERIODS.LAST_MONTH,
        PERIODS.THIS_YEAR,
      ];
    } else {
      presets = [...displayPresets];
    }

    return (
      <DatePresetWrapper>
        {presets.map(text => (
          <StyledLabel
            active={activePeriod === text}
            key={text}
            onClick={() => this.handleRangeClick(text as Period)}
          >
            {text}
          </StyledLabel>
        ))}
      </DatePresetWrapper>
    );
  };

  handleDateChange = ({ startDate, endDate }: DateChangeArgs) => {
    const { onDateChange } = this.props;
    this.setState({ activePeriod: PERIODS.CUSTOM });
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
          // calendarInfoPosition={hasPresets && 'before'}
          minimumNights={minimumNights}
          enableOutsideDays
        />
      </DatePickerWrapper>
    );
  }
}

export default DatePicker;
