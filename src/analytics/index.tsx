/* eslint-disable no-shadow */
import React from 'react';

export type AnalyticsTag = string;

export type AnalyticsPageType = 'page' | 'modal' | 'tab';

export interface AnalyticsPage {
  tag: AnalyticsTag;
  type: AnalyticsPageType;
}

export interface AnalyticsContextValue {
  pages: AnalyticsPage[];
  tracker: AnalyticsTracker;
  merchantId: number;
  ip: string;
}

/**
 * Props present on various components which aid in the tracking of analytics events.
 */
export interface AnalyticsProps {
  /** Unique identifier of the component within the logical page hierarchy. */
  tag?: AnalyticsTag;

  /** Posiition of the component within a table-like component. */
  position?: {
    /** Unique ID of the row (usually what you would use as a key in react). */
    id: string;

    /** Row index. */
    row?: number;

    /** Column index or name. */
    column?: number | string;
  };
}

export enum AnalyticsEvents {
  CLICK = 'click',
  DROPDOWN_CHANGE = 'dropdown_change',
  DROPDOWN_SELECT = 'dropdown_select',
  CHECKBOX_ON = 'checkbox_on',
  CHECKBOX_OFF = 'checkbox_off',
  RADIOBUTTON_SELECT = 'radiobutton_select',
  DATEPICKER_CHANGE = 'datepicker_date_change',
  DAYPICKER_CHANGE = 'daypicker_date_change',
}

export enum AnalyticsComponentType {
  BUTTON = 'button',
  DROPDOWN = 'dropdown',
  ICON = 'icon',
  LINK = 'link',
  CHECKBOX = 'checkbox',
  DATEPICKER = 'datepicker',
  DAYPICKER = 'daypicker',
  DATEPICKER_PRESET = 'datepicker_preset',
  TAB = 'tab',
  TAB_NAVIGATION = 'tab_navigation',
}

export interface Event {
  event: AnalyticsEvents;
  type: AnalyticsComponentType;
  tag: AnalyticsTag;
  pages: AnalyticsPage[];
}

export type AnalyticsHandlerFn = (event: Event) => void;

/** Receives tracking events and dispatches them to handlers. */
export class AnalyticsTracker {
  handlers: AnalyticsHandlerFn[] = [];

  registerHandler = (fn: AnalyticsHandlerFn) => {
    this.handlers.push(fn);
  };

  deregisterHandler = (fn: AnalyticsHandlerFn) => {
    // TODO
  };

  track = (event: {
    event: AnalyticsEvents;
    type: AnalyticsComponentType;
    tag: AnalyticsTag;
    pages: AnalyticsPage[];
    merchantId: number;
    ip: string;
  }) => {
    this.handlers.forEach((handler) => handler(event));
  };
}

export const ROOT_ANALYTICS_CONTEXT: AnalyticsContextValue = {
  pages: [],
  tracker: new AnalyticsTracker(),
  merchantId: 0,
  ip: '',
};
/** React context you can use to access the current tracker and page hierarchy. */
export const AnalyticsContext = React.createContext(ROOT_ANALYTICS_CONTEXT);

export type AnalyticsPageProps = {
  /** Tag of this page. */
  tag: AnalyticsTag;

  /** Type of this page. */
  type: AnalyticsPageType;

  /** Children in the page. */
  children?: React.ReactNode;

  /** merchant id */
  merchantId?: number;

  /** user ip address */
  ip?: string;
};

export type AnalyticsComponentProps = {
  children: (context: AnalyticsContextValue) => React.ReactNode;
};

/** A component to wrap other components with to gain access to the AnalyticsContextValue. */
export const AnalyticsComponent = ({ children }: AnalyticsComponentProps) => (
  <AnalyticsContext.Consumer>{children}</AnalyticsContext.Consumer>
);

/** Registers a subpage in the analytics component hierarchy. */
export const AnalyticsPage = ({
  tag,
  type,
  children,
  merchantId: mid,
  ip: ipAddress,
}: AnalyticsPageProps) => (
  <AnalyticsContext.Consumer>
    {({ pages, tracker, merchantId, ip }) => (
      <AnalyticsContext.Provider
        value={{
          pages: [...pages, { tag, type }],
          tracker,
          merchantId: mid || merchantId,
          ip: ipAddress || ip,
        }}
      >
        {children}
      </AnalyticsContext.Provider>
    )}
  </AnalyticsContext.Consumer>
);
