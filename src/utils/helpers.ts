import moment from 'moment';

export const getMonthOptions = (): Array<any> =>
  moment.months().map((label, value) => ({ value, displayName: label }));

export const getYearOptions = () => {
  const yearOptions: Array<any> = [];
  for (let i = moment().year() - 100; i <= moment().year(); i += 1) {
    yearOptions.push({ value: i.toString(), displayName: i.toString() });
  }

  return yearOptions;
};
