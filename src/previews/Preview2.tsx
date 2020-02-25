import React from 'react';
import { Colors } from '@inplayer-org/inplayer-ui';
import { withTheme } from "styled-components";

// Images
import previewImg from 'assets/ip-preview-premium.png';

// Types
import { Branding } from './types';

// Components
import TextEditor from '../components/TextEditor';
import { PaywallExplain, FooterLink } from './styledComponents/SharedComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  AssetDetails,
  BuyButton,
  StyledIcon,
  PaywallExplainSpan,
  Footer,
} from './styledComponents/Preview2';

interface OwnProps {
  imageUrl?: string;
  showInPreview?: boolean;
  branding?: Branding;
  width?: string;
  height?: string;
  theme?: any;
}

const Preview2 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Title</strong></h1>`,
    preview_description: previewDescription = `<p>Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = Colors.green,
    preview_buttons_text_color: buttonTextColor = Colors.white,
  } = {},
  showInPreview = true,
  height,
  width,
}: OwnProps) => (
  <StyledPreviewBox minHeight="500px" minWidth="400px" height={height} width={width}>
    <StyledImageHolder
      showInPreview={showInPreview}
      backgroundImage={imageUrl}
      descriptionLength={previewDescription.length}
    />
    <AssetDetails>
      <PaywallExplain color={buttonBgColor}>
        <PaywallExplainSpan>
          <StyledIcon name="star" />
          This premium content requires an account to access.
        </PaywallExplainSpan>
      </PaywallExplain>
      <TextEditor value={previewTitle} displayToolbar={false} readOnly />
      <TextEditor value={previewDescription} displayToolbar={false} readOnly />
      <BuyButton buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
        {previewButtonLabel}
      </BuyButton>
      <Footer color={Colors.fontGray}>
        <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
      </Footer>
    </AssetDetails>
  </StyledPreviewBox>
);

export default withTheme(Preview2);
