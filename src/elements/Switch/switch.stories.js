import React from 'react';
import styled from 'styled-components';
import { Typography, Colors } from 'src/index';
import Switch from './index';

export default {
  component: Switch,
  title: 'Switch',
};
const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding: 25px 25px 25px 40px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h1">Switch</HeadlineTypography>
    <Typography variant="p" description>
      Toggle is a input component for flipswitch. You can use it directly like this:
    </Typography>

    <BoxContainer>
      <Switch
        disabled={false}
        checked={false}
        id="unchecked"
        label="Swipe me!"
        onChange={console.log}
      />
      <br />
      <Switch
        disabled={false}
        checked
        id="checkedByDefault"
        label="Checked by default!"
        onChange={console.log}
      />
      <br />
      <Switch
        disabled
        checked={false}
        id="disabledUnchecked"
        label="Disabled!"
        onChange={console.log}
      />
      <br />
      <Switch
        disabled
        checked
        id="disabledChecked"
        label="Disabled and checked!"
        onChange={console.log}
      />
    </BoxContainer>
  </Container>
);
