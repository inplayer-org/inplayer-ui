import React from 'react';

// components
import { AnalyticsComponent, AnalyticsEvents, AnalyticsComponentType } from '../../analytics';

type Props = {
  isAuthenticated: boolean;
  loginFooterLabel: string;
};
const FooterText = ({ isAuthenticated, loginFooterLabel }: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => {
      const onClick = () => {
        tracker.track({
          event: AnalyticsEvents.CLICK,
          type: AnalyticsComponentType.LINK,
          tag: isAuthenticated
            ? 'link_user_email'
            : 'link_already_have_access_login_with_your_account',
          pages,
          merchantId,
          ip,
        });
      };

      const elementProps = {
        'aria-hidden': true,
        onClick,
      };

      const authText = (
        <>
          Welcome back <strong {...elementProps}>{loginFooterLabel}</strong> Access this content!
        </>
      );
      const noAuthText = loginFooterLabel;

      return (
        <span {...(!isAuthenticated && { ...elementProps })}>
          {isAuthenticated ? authText : noAuthText}
        </span>
      );
    }}
  </AnalyticsComponent>
);

export default FooterText;
