import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CSSProperties } from 'styled-components';
import NotificationContainer, { CloseIcon } from './NotificationContainer';

export type NotificationVariant = 'success' | 'danger' | 'warning' | '';

type NotificationProps = {
  /**
   * Notification title
   */
  title: string;
  /**
   * Notification content
   */
  content: string;
  /**
   * Variant type
   */
  variant?: NotificationVariant;
  /**
   * Duration (in seconds) of the notification before it dissapears
   */
  duration?: number;
  /**
   * Function to close the notification
   */
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

const destroy = (index: number) => {
  if (divs[index]) {
    ReactDOM.unmountComponentAtNode(divs[index]);
    document.body.removeChild(divs[index]);
  }
};

const Notification = ({
  title,
  content,
  variant = '',
  duration = 0,
  close = () => destroy(divs.length),
}: NotificationProps) => {
  useTimeout(close, duration * 1000);
  return (
    <NotificationContainer variant={variant} duration={duration}>
      <div>
        <strong>{title}</strong> {content}
      </div>
      <CloseIcon onClick={close} />
    </NotificationContainer>
  );
};

const create = (props: NotificationProps, parentDiv?: HTMLDivElement) => {
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
