// @flow
import React from 'react';
import colors from 'config/colors';
import { lighten } from 'polished';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import TextEditor from '../components/TextEditor';
import { type Branding } from '../types/branding';

// Components
import { PaywallExplain } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  Overlay,
  BuyButtonHolder,
  BuyButtonBorder,
  BuyButton,
  ItemDetails,
  StyledIcon,
  PaywallExplainSpan,
  TitleHolder,
  DescriptionHolder,
} from './styled';

type OwnProps = {
  branding?: Branding,
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  handleOpenModal: (e: any) => any,
};

const Preview5 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = lighten(0.01, colors.green),
    preview_buttons_text_color: buttonTextColor = colors.black,
  },
  width,
  height,
  minHeight,
  minWidth,
  handleOpenModal,
}: OwnProps) => (
  <StyledPreviewBox minHeight={minHeight} minWidth={minWidth} width={width} height={height}>
    <ImageWrapper height={height} backgroundImage={imageUrl}>
      <Overlay />
      <BuyButtonHolder>
        <BuyButtonBorder>
          <BuyButton
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </BuyButton>
        </BuyButtonBorder>
      </BuyButtonHolder>
    </ImageWrapper>
    <ItemDetails height={height}>
      <PaywallExplain color={lighten(0.01, buttonBgColor)}>
        <StyledIcon name="diamond" />
        <PaywallExplainSpan>Premium content</PaywallExplainSpan>
      </PaywallExplain>
      <TitleHolder>
        <TextEditor value={previewTitle} displayToolbar={false} readOnly />
      </TitleHolder>
      <DescriptionHolder>
        <TextEditor value={previewDescription} displayToolbar={false} readOnly />
      </DescriptionHolder>
    </ItemDetails>
  </StyledPreviewBox>
);

Preview5.defaultProps = {
  branding: {},
  minWidth: undefined,
  minHeight: '420px',
  height: '60vh',
  width: '60vh',
};

export default Preview5;
