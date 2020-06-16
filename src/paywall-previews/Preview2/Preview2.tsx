import React from 'react';

// Colors
import colors from '../../theme/colors';

// Types
import Branding from '../types/branding';

// Components
import PreviewText from '../shared/PreviewText';
import { StyledPaywallDescription, BuyButton, FooterLink } from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  AssetDetails,
  PaywallDescriptionSpan,
  BuyButtonWrapper,
  StyledIcon,
  Footer,
} from './styled';

type Props = {
  /**
   * Branding type
   */
  branding?: Branding;
  /**
   * Minimum width
   */
  minWidth?: string;
  /**
   * Minimum height
   */
  minHeight?: string;
  /**
   * Preview height
   */
  height?: string;
  /**
   * Preview width
   */
  width?: string;
  /**
   * Login footer label
   */
  loginFooterLabel?: string;
  /**
   * Whether the asset is restricted or not
   */
  isRestrictedAsset?: boolean;
  /**
   * Function which handles the modal state changes
   */
  handleOpenModal?: (e: any) => any;
  // premium content label
  premiumContentLabel?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

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
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      id="preview-container"
      minHeight={minHeight}
      minWidth={minWidth}
      height={height}
      width={width}
    >
      <StyledImageHolder backgroundImage={image} onClick={handleOpenModal} />
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
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </BuyButton>
        </BuyButtonWrapper>
        <Footer color={colors.fontGray}>
          <FooterLink href="#login" onClick={handleOpenModal}>
            {loginFooterLabel}
          </FooterLink>
        </Footer>
      </AssetDetails>
    </StyledPreviewBox>
  );
};

export default Preview2;
