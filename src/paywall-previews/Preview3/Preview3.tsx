import React from 'react';
import { GiCutDiamond } from 'react-icons/gi';

// Colors
import colors from '../../theme/colors';

// Components
import { AnalyticsComponent, AnalyticsEvents, AnalyticsComponentType } from '../../analytics';
import FooterText from '../shared/FooterText';
import PreviewText from '../shared/PreviewText';
import {
  StyledRestrictedAssetContainer,
  RestrictedAssetIcon,
  StyledPaywallDescription,
} from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  Header,
  StyledTextWrapper,
  PaywallDescriptionSpan,
  TitleWrapper,
  TitleBorder,
  StyledIcon,
  DescriptionWrapper,
} from './styled';

// Types
import Branding from '../types/branding';

type Props = {
  branding?: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
  isAuthenticated?: boolean;
  restrictedMessage?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    inplayer_protected_label: hasProtectedByLabel = true,
  } = {},
  minWidth = '',
  minHeight = '',
  height = '',
  width = '',
  isRestrictedAsset = false,
  handleOpenModal,
  loginFooterLabel = 'Already have access? Login with your InPlayer account',
  premiumContentLabel = 'Premium content',
  isAuthenticated = false,
  restrictedMessage = 'This content is not available.',
}: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => (
      <StyledPreviewBox
        id="preview-container"
        minHeight={minHeight}
        minWidth={minWidth}
        width={width}
        height={height}
      >
        <StyledImageHolder backgroundImage={imageUrl} onClick={handleOpenModal}>
          {isRestrictedAsset && (
            // Call handleOpenModal here because this div element will be
            // on the top of all image elements in case of restricted asset
            <StyledRestrictedAssetContainer height="50%" onClick={handleOpenModal}>
              <RestrictedAssetIcon />
              {restrictedMessage}
            </StyledRestrictedAssetContainer>
          )}
          <Header onClick={handleOpenModal} color={colors.fontLightGray}>
            <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
          </Header>
          <StyledTextWrapper onClick={handleOpenModal}>
            <StyledPaywallDescription
              color={buttonBgColor}
              hasProtectedByLabel={hasProtectedByLabel}
            >
              <PaywallDescriptionSpan>
                <GiCutDiamond /> {premiumContentLabel}
              </PaywallDescriptionSpan>
            </StyledPaywallDescription>
            <TitleWrapper>
              <TitleBorder color={buttonBgColor}>
                <PreviewText value={previewTitle} textColor={colors.white} />
              </TitleBorder>
              <StyledIcon
                onClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.ICON,
                    tag: 'icon_play',
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                color={buttonBgColor}
              />
            </TitleWrapper>
            <DescriptionWrapper>
              <PreviewText value={previewDescription} textColor={colors.white} />
            </DescriptionWrapper>
          </StyledTextWrapper>
        </StyledImageHolder>
      </StyledPreviewBox>
    )}
  </AnalyticsComponent>
);

export default Preview3;
