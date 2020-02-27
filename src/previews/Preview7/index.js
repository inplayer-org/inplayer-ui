// @flow
import React from 'react';
import { InPlayerIcon, Typography } from 'elements';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

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
  displayBuyButton?: boolean,
  previewNotAvailable?: boolean,
  width?: string,
  height?: string,
  minHeight?: string,
  minWidth?: string,
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
  },
  displayBuyButton,
  previewNotAvailable,
  width,
  height,
  minWidth,
  minHeight,
}: Props) => (
  <StyledPreviewBox
    minWidth={minWidth}
    minHeight={minHeight}
    topBorder={previewTopBorder}
    circleImage
    width={width}
    height={height}
  >
    {previewNotAvailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
    <StyledImageWrapper>
      <PreviewImage src={imageUrl} imageWidth="250px" imageBorderRadius />
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
      <Typography variant="p">Already have access? Login here with your account.</Typography>
    </StyledPreviewFooter>
  </StyledPreviewBox>
);

Preview7.defaultProps = {
  branding: {},
  displayBuyButton: true,
  previewNotAvailable: false,
  minWidth: '400px',
  minHeight: '460px',
  height: undefined,
  width: undefined,
};

export default Preview7;
