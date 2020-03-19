import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import NotificationContainer, { CloseIcon } from './NotificationContainer';

type NotificationVariant = 'success' | 'danger' | 'warning';

interface NotificationProps {
  title: string;
  content: string;
  duration: number;
  variant?: NotificationVariant;
  className?: string;
  style?: Record<string, any>;
  close?: () => void;
}

const divs: Array<HTMLDivElement> = [];

function useTimeout(callback: any, duration: any) {
  useEffect(() => {
    if (duration >= 0) {
      const id = setTimeout(callback, duration);
      return () => clearTimeout(id);
    }
  }, [duration]);
}

const Notification = ({
  title,
  content,
  duration,
  variant,
  className,
  close,
  style,
}: NotificationProps) => {
  useTimeout(close, duration * 1000);
  return (
    <NotificationContainer
      variant={variant}
      duration={duration}
      className={className}
      style={style}
    >
      <div>
        <strong>{title} </strong> {content}
      </div>
      <CloseIcon onClick={close} />
    </NotificationContainer>
  );
};

function destroy(index: any) {
  if (divs[index]) {
    ReactDOM.unmountComponentAtNode(divs[index]);
    document.body.removeChild(divs[index]);
  }
}

function create(props: NotificationProps, parentDiv?: HTMLDivElement) {
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

Notification.success = function success(props: NotificationProps, parentDiv?: HTMLDivElement) {
  create({ ...props, variant: 'success' }, parentDiv);
};

Notification.warning = function warning(props: NotificationProps, parentDiv?: HTMLDivElement) {
  create({ ...props, variant: 'warning' }, parentDiv);
};

Notification.danger = function danger(props: NotificationProps, parentDiv?: HTMLDivElement) {
  create({ ...props, variant: 'danger' }, parentDiv);
};

Notification.defaultProps = {
  variant: '',
  duration: 0,
  className: '',
  style: {},
};

export default Notification;
