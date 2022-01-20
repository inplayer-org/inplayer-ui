import React from 'react';
import { AnalyticsComponent, AnalyticsEvents, AnalyticsComponentType } from '../../analytics';

type Props = {
  isAuthenticated: boolean;
  loginFooterLabel: string;
};
const FooterText = ({ isAuthenticated, loginFooterLabel }: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) =>
      isAuthenticated ? (
        <span>
          Welcome back{' '}
          <strong
            aria-hidden="true"
            onClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.LINK,
                tag: 'link_user_email',
                pages,
                merchantId,
                ip,
              });
            }}
          >
            {loginFooterLabel}
          </strong>{' '}
          Access this content!
        </span>
      ) : (
        <span
          aria-hidden="true"
          onClick={() => {
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.LINK,
              tag: 'link_already_have_access_login_with_your_account',
              pages,
              merchantId,
              ip,
            });
          }}
        >
          {loginFooterLabel}
        </span>
      )
    }
  </AnalyticsComponent>
);

export default FooterText;
