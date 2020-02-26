// @flow
import React from 'react';
import InPlayerIcon from 'elements/InPlayerIcon';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import { type Branding } from '../types/branding';

// Components
import { PreviewImage, OverlayLabel } from '../components/SharedComponents';
import TextEditor from '../components/TextEditor';
import {
  StyledPreviewBox,
  StyledImageWrapper,
  StyledIconWrapper,
  ItemDetails,
  PreviewHeader,
  ItemContent,
  ButtonWrapper,
  BuyButton,
  StyledPreviewFooter,
} from './styled';

type Props = {
  branding?: Branding,
  assetCountrySetId?: number,
  assetDomainRestrictions?: Array<any>,
  displayBuyButton?: boolean,
  previewNotAvailable?: boolean,
  width?: string,
  height?: string,
};

const Preview7 = ({
  branding: {
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset Title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  assetCountrySetId,
  assetDomainRestrictions = [],
  displayBuyButton = true,
  previewNotAvailable,
  width,
  height,
}: Props) => {
  const isRestrictedAsset = assetCountrySetId || assetDomainRestrictions.length !== 0;
  const assetPreviewImage = isRestrictedAsset ? restrictedAssetImg : imageUrl || previewImg;

  return (
    <StyledPreviewBox
      minWidth="400px"
      minHeight="460px"
      topBorder={previewTopBorder}
      circleImage
      width={width}
      height={height}
    >
      {previewNotAvailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledImageWrapper>
        <PreviewImage src={assetPreviewImage} imageWidth="250px" imageBorderRadius />
        <StyledIconWrapper backgroundColor={buttonBgColor} protectedLabel={protectedLabel}>
          <InPlayerIcon name="lock" />
        </StyledIconWrapper>
      </StyledImageWrapper>
      <ItemDetails>
        <PreviewHeader>
          <TextEditor value={previewTitle} displayToolbar={false} isTextCenter readOnly />
        </PreviewHeader>
        <ItemContent>
          <TextEditor value={previewDescription} displayToolbar={false} isTextCenter readOnly />
        </ItemContent>
      </ItemDetails>
      {displayBuyButton && (
        <ButtonWrapper>
          <BuyButton buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
            {previewButtonLabel}
          </BuyButton>
        </ButtonWrapper>
      )}
      <StyledPreviewFooter color={colors.fontGray}>
        <p>Already have access? Login here with your account.</p>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

Preview7.defaultProps = {
  branding: {},
  assetCountrySetId: 0,
  assetDomainRestrictions: [],
  displayBuyButton: false,
  previewNotAvailable: false,
  width: '0',
  height: '0',
};

export default Preview7;
