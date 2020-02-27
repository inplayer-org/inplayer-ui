// @flow
import React from 'react';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import { type Branding } from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import { PaywallExplain, FooterLink } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  AssetDetails,
  BuyButton,
  StyledIcon,
  PaywallExplainSpan,
  Footer,
} from './styled';

type Props = {
  showInPreview?: boolean,
  branding?: Branding,
  width?: string,
  height?: string,
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
  showInPreview,
  height,
  width,
}: Props) => (
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
      <Footer color={colors.fontGray}>
        <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
      </Footer>
    </AssetDetails>
  </StyledPreviewBox>
);

Preview2.defaultProps = {
  showInPreview: true,
  branding: {},
  width: '',
  height: '',
};

export default Preview2;
