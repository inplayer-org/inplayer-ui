import moment, { Moment } from 'moment';

export const addCustomTimeToDate = (date: Moment | null, hour: any, minutes: any) =>
  date?.set('hour', hour).set('minute', minutes).set('second', 0) || null;

export const timeMinutesSplitter = (date: string) => {
  const [hour, minutes] = date.split(':');
  return [hour, minutes];
};

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
