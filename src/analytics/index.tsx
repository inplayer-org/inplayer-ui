import React from "react";

export type AnalyticsTag = string;

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
export class AnalyticsTracker {}

export type AnalyticsPageType = 'page' | 'modal' | 'tab';

export interface AnalyticsPage {
  tag: AnalyticsTag;
  type: AnalyticsPageType;
}

export interface AnalyticsContextValue {
  pages: AnalyticsPage[];
  tracker: AnalyticsTracker;
}

export const ROOT_ANALYTICS_CONTEXT: AnalyticsContextValue = {
  pages: [],
  tracker: new AnalyticsTracker(),
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
};

export type AnalyticsComponentProps = {
  children?: (context: AnalyticsContextValue) => React.ReactNode;
};

/** A component to wrap other components with to gain access to the AnalyticsContextValue. */
export const AnalyticsComponent = ({ children }: AnalyticsComponentProps) => (
  <AnalyticsContext.Consumer>{children}</AnalyticsContext.Consumer>
);

/** Registers a subpage in the analytics component hierarchy. */
export const AnalyticsPage = ({ tag, type, children }: AnalyticsPageProps) => (
  <AnalyticsContext.Consumer>
    {({ pages, tracker }) => (
      <AnalyticsContext.Provider value={{ pages: [...pages, { tag, type }], tracker }}>
        {children}
      </AnalyticsContext.Provider>
    )}
  </AnalyticsContext.Consumer>
);
