import React, { FunctionComponent } from 'react';
import { Colors, InPlayerIcon } from '@inplayer-org/inplayer-ui';
import { withTheme } from "styled-components";

// Images
import previewImg from 'assets/ip-preview-premium.png';
import restrictedAssetImg from 'assets/restricted-asset.png';

// Types
import { Branding } from './types';

// Components
import { PreviewImage, OverlayLabel } from './styledComponents/SharedComponents';
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
} from './styledComponents/Preview7';

interface Props {
  branding?: Branding;
  assetCountrySetId?: number;
  assetDomainRestrictions?: Array<any>;
  displayBuyButton?: boolean;
  previewNotAvailable?: boolean;
  width?: string;
  height?: string;
  theme?: any;
}

const Preview7: FunctionComponent<Props> = ({
  branding: {
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset Title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = Colors.green,
    preview_buttons_text_color: buttonTextColor = Colors.white,
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
      <StyledPreviewFooter color={Colors.fontGray}>
        <p>Already have access? Login here with your account.</p>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

export default withTheme(Preview7);
