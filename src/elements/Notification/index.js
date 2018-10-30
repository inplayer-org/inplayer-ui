// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import NotificationContainer from './NotificationContainer';

type NotificationVariant = 'success' | 'danger' | 'warning';

type NotificationProps = {
  title: string,
  content: string,
  variant: ?NotificationVariant,
  duration: ?number,
  className: ?string,
};

const Notification = ({ title, content, variant, duration, className }: NotificationProps) => (
  <NotificationContainer variant={variant} duration={duration} className={className}>
    <strong>{title}</strong> {content}
  </NotificationContainer>
);

function create(props: NotificationProps, parentDiv: ?HTMLDivElement) {
  const notificationInstance = <Notification {...props} />;
  const div = document.createElement('div');
  if (parentDiv) {
    parentDiv.appendChild(div);
  } else if (document.body) {
    document.body.appendChild(div);
  }

  ReactDOM.render(notificationInstance, div);
}

Notification.create = create;

Notification.success = function success(props: NotificationProps, parentDiv: ?HTMLDivElement) {
  create({ ...props, variant: 'success' }, parentDiv);
};

Notification.warning = function warning(props: NotificationProps, parentDiv: ?HTMLDivElement) {
  create({ ...props, variant: 'warning' }, parentDiv);
};

Notification.danger = function danger(props: NotificationProps, parentDiv: ?HTMLDivElement) {
  create({ ...props, variant: 'danger' }, parentDiv);
};

/** @component */
export default Notification;
