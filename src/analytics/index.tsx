import React, { Component } from 'react';

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
/** Receives tracking events and dispatches them to handlers. */
export class AnalyticsTracker extends Component<void, void> {
  track = (event: {
    event: 'click';
    type: 'button';
    tag: AnalyticsTag;
    pages: AnalyticsPage[];
    merchantId: number;
    ip: string;
  }) => {
    const url = new URL('https://staging-v2.inplayer.com/analytics/track');

    url.searchParams.append('tag', event.tag);
    url.searchParams.append('action', event.event);
    url.searchParams.append('type', event.type);
    if (event.pages[0]) {
      url.searchParams.append('page', event.pages[0].tag);
      if (event.pages[1]) {
        url.searchParams.append('subpage', event.pages[1].tag);
      }
    }
    url.searchParams.append('timestamp', (Date.now() as unknown) as string);
    url.searchParams.append('mid', (event.merchantId as unknown) as string);
    url.searchParams.append('hash', event.ip);
    fetch(url.href);
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
