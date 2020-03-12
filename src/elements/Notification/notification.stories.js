// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Notification from './index';
import Button from '../Button/index';
import Typography from '../Typography/index';

export default {
  component: Notification,
  title: 'Notification',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const demo = () => (
  <>
    <Container>
      <Typography variant="h1" color="black">
        Notification
      </Typography>
      <Typography variant="p" description>
        The Notification exposes an API for creating notifications. The API consists of 4 functions:
        <b> Notification.create</b>, <b>Notification.success</b>, <b>Notification.danger</b> and
        <b> Notification.warning</b>. The latter 3 are simply abstractions over the first one which
        set the <b>variant</b> to <b>success</b>, <b>danger</b> and <b>warning</b> accordingly. If
        no variant is passed it will simply use a neutral grey color scheme (check the demo.). The
        functions take 2 arguments: first one is an object which represents the props of the
        notification, the second one is optional and is a reference to a parent DOM element for the
        notification. If the parent DOM is not passed the notification will be mounted as a child on
        the <b>body</b> element. The way it is used is:
      </Typography>
      <Button
        onClick={() =>
          Notification.create({
            title: 'Notification',
            content: 'This is a regular notification',
            duration: 3,
          })
        }
      >
        Show notification
      </Button>{' '}
      <br />
      <Button
        onClick={() =>
          Notification.success({
            title: 'Hooray!',
            content: 'This is a success notification',
            duration: 3,
          })
        }
      >
        Show success notification
      </Button>{' '}
      <br />
      <Button
        onClick={() =>
          Notification.danger({
            title: 'Oh no!',
            content: 'This is a danger notification',
            duration: 3,
          })
        }
      >
        Show danger notification
      </Button>{' '}
      <br />
      <Button
        onClick={() =>
          Notification.warning({
            title: 'Careful!',
            content: 'This is a warning notification',
            duration: 3,
          })
        }
      >
        Show warning notification
      </Button>
    </Container>
  </>
);
