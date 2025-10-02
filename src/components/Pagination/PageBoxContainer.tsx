import React, { ButtonHTMLAttributes } from 'react';
import {
  AnalyticsComponent,
  AnalyticsEvents,
  AnalyticsComponentType,
  AnalyticsProps,
} from '../../analytics';
import { PageBox, BoxStyles } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, AnalyticsProps, BoxStyles {}
const PageBoxContainer = ({ onClick, tag = '', ...rest }: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => (
      <PageBox
        onClick={(e) => {
          onClick?.(e);
          if (tag) {
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.PAGINATION,
              tag,
              pages,
              merchantId,
              ip,
            });
          }
        }}
        {...rest}
      />
    )}
  </AnalyticsComponent>
);

export default PageBoxContainer;
