// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import NotificationContainer, { CloseIcon } from './NotificationContainer';

type NotificationVariant = 'success' | 'danger' | 'warning';

type NotificationProps = {
  title: string,
  content: string,
  variant?: NotificationVariant,
  duration?: number,
  className?: string,
  style?: Object,
  close: () => void,
};

const divs: Array<HTMLDivElement> = [];

const Notification = ({
  title,
  content,
  variant,
  duration,
  className,
  close,
  style,
}: NotificationProps) => (
  <NotificationContainer variant={variant} duration={duration} className={className} style={style}>
    <div>
      <strong>{title}</strong> {content}
    </div>
    <CloseIcon onClick={close} />
  </NotificationContainer>
);

function destroy(index) {
  if (divs[index]) {
    ReactDOM.unmountComponentAtNode(divs[index]);
  }
}

function create(props: NotificationProps, parentDiv: ?HTMLDivElement) {
  const divIndex = divs.length;
  const notificationInstance = <Notification {...props} close={() => destroy(divIndex)} />;
  const div = document.createElement('div');
  if (parentDiv) {
    parentDiv.appendChild(div);
  } else if (document.body) {
    document.body.appendChild(div);
  }

  ReactDOM.render(notificationInstance, div);
  divs.push(div);
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

Notification.defaultProps = {
  variant: '',
  duration: 0,
  className: '',
  style: {},
};

/** @component */
export default Notification;
