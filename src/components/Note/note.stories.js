import React from 'react';
import styled from 'styled-components';
import { Colors, Typography } from 'src/index';
import Note from './index';

export default {
  component: Note,
  title: 'Note',
};

const Container = styled.div`
  margin: auto;
  width: 90%;
`;
const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding: 40px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h3">Note</HeadlineTypography>
    <Typography variant="p" description>
      Note is a component for displaying information for notification. <br />
      The <b>type</b> attribute can be: informative, success, warning, danger. If not of the above
      is added, the default note with white background will be displayed. <br />
      The <b>title</b> attribute is the string to be set as title for the notification. <br />
      The <b>text</b> attribute is the actual notification that needs to be displayed to the user.{' '}
      <br />
      The <b>icon</b> attribute is a string which represents a FontAwesome icon. It is not
      considered when there is a <b>type</b> prop passed. <br />
    </Typography>
    <br />
    <BoxContainer>
      <Note
        title="Just so you know!"
        text="This block indicates a neutral informative note."
        icon="info-circle"
      />

      <Note
        type="informative"
        title="Just so you know!"
        text="This is used as a note on white backgrounds to give it a little contrast."
      />

      <Note
        type="success"
        title="Done!"
        text="This box indicates a successful or positive action."
      />

      <Note
        type="warning"
        title="Important note!"
        text="This box indicates a warning that might need attention."
      />

      <Note
        type="danger"
        title="Danger!"
        text="This box indicates a dangerous or potentially negative action."
      />
    </BoxContainer>
  </Container>
);
