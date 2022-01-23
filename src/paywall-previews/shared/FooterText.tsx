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
          tag: 'link_user_email',
          pages,
          merchantId,
          ip,
        });
      };

      const elementProps = {
        'aria-hidden': true,
        onClick,
      };

      const authText = `Welcome back <strong {...${elementProps}}>${loginFooterLabel}</strong> Access this content!`;
      const noAuthText = loginFooterLabel;

      return (
        <span {...(isAuthenticated && { ...elementProps })}>
          {isAuthenticated ? authText : noAuthText}
        </span>
      );
    }}
  </AnalyticsComponent>
);

export default FooterText;
