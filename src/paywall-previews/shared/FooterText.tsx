import React from 'react';

type Props = {
  isAuthenticated: boolean;
  loginFooterLabel: string;
};
const FooterText = ({ isAuthenticated, loginFooterLabel }: Props) =>
  isAuthenticated ? (
    <span>
      Welcome back <strong>{loginFooterLabel}</strong> Access this content!
    </span>
  ) : (
    <span>{loginFooterLabel}</span>
  );

export default FooterText;
