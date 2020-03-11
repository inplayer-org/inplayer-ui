// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Checkbox from './index';
import Typography from '../../elements/Typography/index';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const demo = () => (
  <Container>
    <Typography variant="h1" color="black">
      Checkbox
    </Typography>
    <Typography variant="p" description>
      Checkbox input is a input component for checkbox. You can use it directly like this:{' '}
    </Typography>
    <Checkbox
      name="checkboxUnchecked"
      id="checkboxUnchecked"
      label="Check me!"
      onChange={e => console.log(e)}
    />
    <Checkbox
      checked
      name="checkboxChecked"
      id="checkboxChecked"
      label="Checked by default!"
      onChange={e => console.log(e)}
    />
    <Checkbox
      disabled
      name="checkboxDisabledUnchecked"
      id="checkboxDisabledUnchecked"
      label="Disabled and unchecked!"
      onChange={e => console.log(e)}
    />
    <Checkbox
      checked
      disabled
      name="checkboxDisabledChecked"
      id="checkboxDisabledChecked"
      label="Disabled and checked!"
      onChange={e => console.log(e)}
    />
  </Container>
);
