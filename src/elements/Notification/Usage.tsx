import React from 'react';
import { Notification } from '.';

const Usage = () => (
  <>
    <button
      onClick={() =>
        Notification.create({
          title: 'Notification',
          content: 'This is a regular notification',
          duration: 3,
        })
      }
    >
      REGULAR NOTIFICATION
    </button>
    <button
      onClick={() =>
        Notification.create({
          title: 'Hooray! ',
          variant: 'success',
          content: 'This is a success notification',
          duration: 3,
        })
      }
    >
      SUCCESS NOTIFICATION
    </button>
    <button
      onClick={() =>
        Notification.create({
          title: 'Warning! ',
          variant: 'warning',
          content: 'This is a warning notification',
          duration: 3,
        })
      }
    >
      WARNING NOTIFICATION
    </button>
    <button
      onClick={() =>
        Notification.create({
          title: 'Danger! ',
          variant: 'danger',
          content: 'This is a danger notification',
          duration: 3,
        })
      }
    >
      DANGER NOTIFICATION
    </button>
  </>
);

export default Usage;
