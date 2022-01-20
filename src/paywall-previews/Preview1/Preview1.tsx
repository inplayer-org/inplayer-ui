import React from 'react';

// Colors
import { AnalyticsComponent, AnalyticsEvents, AnalyticsComponentType } from '../../analytics';
import colors from '../../theme/colors';

// Types
import Branding from '../types/branding';

// Components
import FooterText from '../shared/FooterText';
import {
  OverlayLabel,
  RestrictedAssetContainer,
  RestrictedAssetIcon,
} from '../shared/PreviewComponents';
import PreviewText from '../shared/PreviewText';
import {
  InPlayerPreviewBox,
  LockIcon,
  ImageHolder,
  PaywallExplain,
  InplayerWhiteLogo,
  ItemDetails,
  BuyButtonWrapper,
  BuyButton,
  InplayerFooter,
  PreviewImage,
} from './styled';

type Props = {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  handleOpenModal?: (e: any) => any;
  loginFooterLabel?: string;
  protectedByLabel?: string;
  premiumContentLabel?: string;
  isRestrictedAsset?: boolean;
  isAuthenticated?: boolean;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = '<h3>Asset title</h3>',
    preview_description: previewDescription = '<p>Asset description</p>',
    preview_button_label: previewButtonLabel = 'Buy',
    inplayer_protected_label: hasProtectedByLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  displayBuyButton = true,
  previewUnavailable = false,
  loginFooterLabel = 'Already have access? Login with your account.',
  handleOpenModal,
  protectedByLabel = 'Protected by',
  premiumContentLabel = 'Premium content',
  isRestrictedAsset = false,
  isAuthenticated = false,
}: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => (
      <InPlayerPreviewBox className="inplayer-preview-box">
        {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
        <ImageHolder className="inplayer-imageholder" onClick={handleOpenModal}>
          <PreviewImage
            alt="coverPhoto"
            src={imageUrl}
            role="presentation"
            className="inplayer-paywall"
            isRestrictedAsset={isRestrictedAsset}
          />
          {isRestrictedAsset && (
            <RestrictedAssetContainer>
              <RestrictedAssetIcon />
              {premiumContentLabel}
            </RestrictedAssetContainer>
          )}
          <PaywallExplain
            hasProtectedByLabel={hasProtectedByLabel}
            className="inplayer-paywallexplain"
          >
            <InplayerWhiteLogo id="inplayer-whitelogo">
              <strong>{protectedByLabel} inplayer</strong>
              <a
                onClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.ICON,
                    tag: 'icon_inplayer',
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                href="https://inplayer.com"
              >
                InPlayer Paywall
              </a>
            </InplayerWhiteLogo>
            <LockIcon className="inplayer-lock" />
            <span>{!isRestrictedAsset && premiumContentLabel}</span>
          </PaywallExplain>
        </ImageHolder>
        <ItemDetails className="inplayer-itemdetails">
          <PreviewText value={previewTitle} className="inplayer-title" />
          <PreviewText value={previewDescription} />
        </ItemDetails>
        {displayBuyButton && (
          <BuyButtonWrapper className="inplayer-buybutton">
            <BuyButton
              className="inplayer-button inplayer-submit-button"
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={(e) => {
                tracker.track({
                  event: AnalyticsEvents.CLICK,
                  type: AnalyticsComponentType.BUTTON,
                  tag: 'button_buy',
                  pages,
                  merchantId,
                  ip,
                });
                handleOpenModal?.(e);
              }}
            >
              {previewButtonLabel}
            </BuyButton>
          </BuyButtonWrapper>
        )}
        <InplayerFooter className="inplayer-preview-footer">
          <div className="inplayer-guest-footer">
            <a href="#login" onClick={handleOpenModal}>
              <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
            </a>
          </div>
        </InplayerFooter>
      </InPlayerPreviewBox>
    )}
  </AnalyticsComponent>
);

export default Preview1;
