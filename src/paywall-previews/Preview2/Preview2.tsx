import React from 'react';

// Colors
import colors from '../../theme/colors';

// Types
import Branding from '../types/branding';

// Components
import { AnalyticsComponent } from '../../analytics';
import FooterText from '../shared/FooterText';
import PreviewText from '../shared/PreviewText';
import {
  StyledPaywallDescription,
  BuyButton,
  FooterLink,
  RestrictedAssetIcon,
} from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  AssetDetails,
  PaywallDescriptionSpan,
  BuyButtonWrapper,
  StyledIcon,
  Footer,
  StyledRestrictedAssetContainer,
} from './styled';

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

const Preview2 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    inplayer_protected_label: hasProtectedByLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
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
    {() => (
      <StyledPreviewBox
        id="preview-container"
        minHeight={minHeight}
        minWidth={minWidth}
        height={height}
        width={width}
      >
        <StyledImageHolder
          isRestrictedAsset={isRestrictedAsset}
          backgroundImage={imageUrl}
          onClick={handleOpenModal}
        />
        {isRestrictedAsset && (
          // Call handleOpenModal here because this div element will be
          // on the top of image container in case of restricted asset
          <StyledRestrictedAssetContainer onClick={handleOpenModal}>
            <RestrictedAssetIcon />
            {restrictedMessage}
          </StyledRestrictedAssetContainer>
        )}
        <AssetDetails>
          <StyledPaywallDescription color={buttonBgColor} hasProtectedByLabel={hasProtectedByLabel}>
            <PaywallDescriptionSpan>
              <StyledIcon name="star" />
              {premiumContentLabel}
            </PaywallDescriptionSpan>
          </StyledPaywallDescription>
          <PreviewText value={previewTitle} padding="0 0 0.5rem 0" />
          <PreviewText value={previewDescription} />
          <BuyButtonWrapper>
            <BuyButton
              tag="button_buy_preview"
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              {previewButtonLabel}
            </BuyButton>
          </BuyButtonWrapper>
          <Footer color={colors.fontGray}>
            <FooterLink href="#login" onClick={handleOpenModal}>
              <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
            </FooterLink>
          </Footer>
        </AssetDetails>
      </StyledPreviewBox>
    )}
  </AnalyticsComponent>
);

export default Preview2;
