import React, { createContext } from 'react';
import AnalyticsTracker from './AnalyticsTracker';

export type AnalyticsTag = string;

export enum AnalyticsPageType {
  PAGE = 'page',
  MODAL = 'modal',
  TAB = 'tab',
}

export interface AnalyticsPageObject {
  tag: AnalyticsTag;
  type: AnalyticsPageType;
}

export interface AnalyticsContextValue {
  pages: AnalyticsPageObject[];
  tracker: AnalyticsTracker;
  merchantId: number;
  ip: string;
}

export const ROOT_ANALYTICS_CONTEXT: AnalyticsContextValue = {
  pages: [],
  tracker: new AnalyticsTracker(),
  merchantId: 0,
  ip: '',
};

export const AnalyticsContext = createContext(ROOT_ANALYTICS_CONTEXT);

export interface AnalyticsPageProps {
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
}

/** Registers a subpage in the analytics component hierarchy. */
const AnalyticsPageComponent = ({
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

export default AnalyticsPageComponent;
