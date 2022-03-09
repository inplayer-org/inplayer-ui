import React, { ReactNode } from 'react';
import { AnalyticsContext, AnalyticsContextValue } from './AnalyticsPage';

export type AnalyticsComponentProps = {
  children: (context: AnalyticsContextValue) => ReactNode;
};

/** A component to wrap other components with to gain access to the AnalyticsContextValue. */
const AnalyticsComponent = ({ children }: AnalyticsComponentProps) => (
  <AnalyticsContext.Consumer>{children}</AnalyticsContext.Consumer>
);

export default AnalyticsComponent;
