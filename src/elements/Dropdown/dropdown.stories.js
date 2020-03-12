import React from 'react';
import styled from 'styled-components';
import { Typography, Colors } from 'src/index';
import Dropdown from './index';

export default {
  component: Dropdown,
  title: 'Dropdown',
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 2%;
`;

const BoxContainer = styled.div`
  border: solid 1px ${Colors.darkGray};
  width: 90%;
  padding: 25px;
`;
const ParagraphContainer = styled.div`
  width: 90%;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];
const defaultOption = { displayName: 'default value', disabled: true };
const defaultOption1 = { displayName: 'default value' };

export const StandardDropdown = () => (
  <Container>
    <HeadlineTypography variant="h1">Dropdown</HeadlineTypography>
    <ParagraphContainer>
      <Typography variant="p" description>
        A simple Dropdown controlled component. Receives an <b>options</b> prop which is an array of{' '}
        <b>{'{ value, displayName }'}</b> pairs and <b>defaultOption</b> prop which is an object of{' '}
        <b>{'{displayName, disabled}'}</b>. <b>value</b> is passed to the <b>option</b> tag as{' '}
        <b>value</b> prop while <b>displayName</b> is the value used in the dropdown UI.
        <br />
        <br />
        Can accept a custom <b>color</b> parameter, otherwise it uses the theme <b>primary.main</b>{' '}
        color.
      </Typography>
    </ParagraphContainer>

    <HeadlineTypography variant="h4">Standard dropdown</HeadlineTypography>
    <BoxContainer>
      <Dropdown options={options} value={options[0].value} onChange={console.log} />
    </BoxContainer>
    <HeadlineTypography variant="h4">
      Standard dropdown with disabled default option
    </HeadlineTypography>
    <BoxContainer>
      <Dropdown
        options={options}
        value={options[0].value}
        defaultOption={defaultOption}
        onChange={console.log}
      />
    </BoxContainer>
    <HeadlineTypography variant="h4">
      Standard dropdown with enabled default option
    </HeadlineTypography>
    <BoxContainer>
      <Dropdown
        options={options}
        value={options[0].value}
        defaultOption={defaultOption1}
        onChange={console.log}
      />
    </BoxContainer>
  </Container>
);

export const CustomDropdown = () => (
  <Container>
    <HeadlineTypography variant="h1">Custom dropdown</HeadlineTypography>
    <HeadlineTypography variant="h4">Font size modifiers</HeadlineTypography>
    <BoxContainer>
      <Dropdown
        modifiers={['fontSizeExtraSmall']}
        options={options}
        value={options[0].value}
        onChange={console.log}
      />
      <br />
      <br />
      <Dropdown
        modifiers={['fontSizeSmall']}
        options={options}
        value={options[0].value}
        onChange={console.log}
      />
      <br />
      <br />
      <Dropdown
        modifiers={['fontSizeMedium']}
        options={options}
        value={options[0].value}
        onChange={console.log}
      />
      <br />
      <br />
      <Dropdown
        modifiers={['fontSizeLarge']}
        options={options}
        value={options[0].value}
        onChange={console.log}
      />
    </BoxContainer>

    <HeadlineTypography variant="h4">With custom color</HeadlineTypography>
    <BoxContainer>
      <Dropdown options={options} value={options[0].value} onChange={console.log} color="#936" />
    </BoxContainer>
    <HeadlineTypography variant="h4">Disabled</HeadlineTypography>
    <BoxContainer>
      <Dropdown options={options} value={options[0].value} onChange={console.log} disabled />
    </BoxContainer>
  </Container>
);
