import React from 'react';
import colors from 'theme/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import Branding from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import { StyledPaywallDescription, BuyButton, FooterLink } from '../components/SharedComponents';
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
  branding: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
};

const Preview2 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  },
  minWidth,
  minHeight,
  height,
  width,
  handleOpenModal,
  isRestrictedAsset,
  loginFooterLabel,
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minHeight={minHeight}
      minWidth={minWidth}
      height={height}
      width={width}
      topBorder={previewTopBorder}
    >
      <StyledImageHolder backgroundImage={image} />
      <AssetDetails>
        <StyledPaywallDescription color={buttonBgColor} displayProtectedLabel={protectedLabel}>
          <PaywallDescriptionSpan>
            <StyledIcon name="star" />
            This premium content requires an account to access.
          </PaywallDescriptionSpan>
        </StyledPaywallDescription>
        <TextEditor value={previewTitle} displayToolbar={false} readOnly paddingBottom />
        <TextEditor value={previewDescription} displayToolbar={false} readOnly />
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

Preview2.defaultProps = {
  branding: {},
  minWidth: '250px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview2;
