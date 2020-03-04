// @flow
import React from 'react';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import { type Branding } from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import { PaywallDescription, FooterLink } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  AssetDetails,
  BuyButton,
  StyledIcon,
  PaywallDescriptionSpan,
  Footer,
} from './styled';

type Props = {
  branding?: Branding,
  minWidth?: string,
  minHeight?: string,
  height?: string,
  width?: string,
  loginFooterLabel?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal?: (e: any) => any,
};

const Preview2 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Title</strong></h1>`,
    preview_description: previewDescription = `<p>Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
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
    <StyledPreviewBox minHeight={minHeight} minWidth={minWidth} height={height} width={width}>
      <StyledImageHolder backgroundImage={image} descriptionLength={previewDescription.length} />
      <AssetDetails>
        <PaywallDescription color={buttonBgColor}>
          <PaywallDescriptionSpan>
            <StyledIcon name="star" />
            This premium content requires an account to access.
          </PaywallDescriptionSpan>
        </PaywallDescription>
        <TextEditor value={previewTitle} displayToolbar={false} readOnly paddingBottom />
        <TextEditor value={previewDescription} displayToolbar={false} readOnly />
        <BuyButton
          buttonBgColor={buttonBgColor}
          buttonTextColor={buttonTextColor}
          onClick={handleOpenModal}
        >
          {previewButtonLabel}
        </BuyButton>
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
  minWidth: '700px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview2;
