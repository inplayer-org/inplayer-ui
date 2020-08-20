import moment from 'moment';

export const getMonthOptions = (): Array<any> =>
  moment.months().map((label, value) => ({ value, displayName: label }));

export const getYearOptions = () => {
  const yearOptions: Array<any> = [];
  const nextYears = moment().add(100, 'years').year();

  for (let i = nextYears - 200; i <= nextYears; i += 1) {
    yearOptions.push({ value: i.toString(), displayName: i.toString() });
  }

  return yearOptions;
};
