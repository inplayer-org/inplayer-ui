/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { DayPicker } from 'src/index';
import styled from 'styled-components';
import { Typography } from 'elements/index';

const moment = require('moment');

export default {
  component: DayPicker,
  title: 'Day Picker',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const Demo = () => {
  const initialDate = moment();
  const [date, setDate] = useState(initialDate);
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <Typography variant="h3">Day Picker</Typography>
      <Typography variant="p" description>
        DayPicker is a component for picking single day. It takes:
        <br />- <b>date</b> as a momentPropTypes.momentObj, string or null)
        <br />- <b>focused</b> as a prop( PropTypes.boolean)
        <br />- <b>isOutsideRange</b> a function which specifies the days that are not allowed to be
        choosed (ex. isOutsideRange={'{'}day => day.isBefore(moment()){'}'}).
        <br />- <b>onFocusChange</b> a function which controls whether or not the input is focused
        <br />- <b>onDateChange</b> function for setting the state for the dates
        <br />- <b>numberOfMonths</b> as a prop (PropTypes.number) - controls the number of the
        displayed months
      </Typography>
      <DayPicker
        date={date}
        focused={focused}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => setFocused(focused)}
        onDateChange={date => setDate(date)}
      />
    </Container>
  );
};
