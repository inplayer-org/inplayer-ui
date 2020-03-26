import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import NotificationContainer, { CloseIcon } from './NotificationContainer';
import { CSSProperties } from 'styled-components';

export type NotificationVariant = 'success' | 'danger' | 'warning' | '';

type NotificationProps = {
  title: string;
  content: string;
  variant?: NotificationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  close?: () => void;
};

const divs: Array<HTMLDivElement> = [];

const useTimeout = (callback: () => void, duration: number) => {
  useEffect(() => {
    if (typeof duration === 'number' && duration >= 0) {
      const id = setTimeout(callback, duration);
      return () => clearTimeout(id);
    }
  }, [duration]);
};

const Notification = ({
  title,
  content,
  variant = '',
  duration = 0,
  className = '',
  close = () => destroy(divs.length),
  style = {},
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
        <strong>{title}</strong> {content}
      </div>
      <CloseIcon onClick={close} />
    </NotificationContainer>
  );
};

const destroy = (index: number) => {
  if (divs[index]) {
    ReactDOM.unmountComponentAtNode(divs[index]);
    document.body.removeChild(divs[index]);
  }
};

const create = (props: NotificationProps, parentDiv?: HTMLDivElement) => {
  const divIndex = divs.length;
  const notificationInstance = (
    <Notification {...props} close={() => destroy(divIndex)} />
  );
  const div = document.createElement('div');
  if (parentDiv) {
    parentDiv.appendChild(div);
  } else if (document.body) {
    document.body.appendChild(div);
  }

  ReactDOM.render(notificationInstance, div);
  divs.push(div);
};

const success = (props: NotificationProps, parentDiv?: HTMLDivElement) => {
  create({ ...props, variant: 'success' }, parentDiv);
};

const warning = (props: NotificationProps, parentDiv?: HTMLDivElement) => {
  create({ ...props, variant: 'warning' }, parentDiv);
};

const danger = (props: NotificationProps, parentDiv?: HTMLDivElement) => {
  create({ ...props, variant: 'danger' }, parentDiv);
};

Notification.create = create;
Notification.success = success;
Notification.warning = warning;
Notification.danger = danger;

export default Notification;
