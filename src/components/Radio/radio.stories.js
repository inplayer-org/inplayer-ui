import React from 'react';
import styled from 'styled-components';
import { Colors, Typography } from 'src/index';
import Radio from './index';

export default {
  component: Radio,
  title: 'Radio',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding: 30px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h1">Radio</HeadlineTypography>
    <Typography variant="p" description>
      Radio Input is a input component for radio.
    </Typography>
    <BoxContainer>
      <Radio id="radioUnchecked" label="Check me!" onChange={e => console.log(e)} />
      <br />
      <Radio id="radioChecked" label="Checked by default!" checked onChange={e => console.log(e)} />
      <br />
      <Radio
        id="radioDisabledUnchecked"
        disabled
        label="Disabled and unchecked!"
        onChange={e => console.log(e)}
      />
      <br />
      <Radio
        id="radioDisabledChecked"
        disabled
        checked
        label="Disabled and checked!"
        onChange={e => console.log(e)}
      />
    </BoxContainer>
  </Container>
);
