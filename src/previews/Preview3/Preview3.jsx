// @flow
import React from 'react';
import { InPlayerIcon } from 'elements';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import { Branding } from '../types';

// Components
import TextEditor from '../components/TextEditor';
import { PaywallExplain } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  TitleWrapper,
  StyledImageHolder,
  PaywallExplainSpan,
  StyledTextWrapper,
  Header,
  StyledIcon,
  TitleBorder,
} from './styled';

type OwnProps = {
  branding?: Branding,
  showInPreview?: boolean,
  width?: string,
  height?: string,
};

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
  } = {},
  showInPreview = true,
  width,
  height,
}: OwnProps) => (
  <StyledPreviewBox minWidth="450px" color={buttonBgColor} width={width} height={height}>
    <StyledImageHolder backgroundImage={imageUrl}>
      <Header color={colors.fontLightGray}>
        Already have access? Login with your InPlayer account
      </Header>
      <StyledTextWrapper showInPreview={showInPreview}>
        <PaywallExplain color={buttonBgColor}>
          <PaywallExplainSpan>
            <InPlayerIcon name="diamond" /> PREMIUM CONTENT
          </PaywallExplainSpan>
        </PaywallExplain>
        <TitleWrapper>
          <TitleBorder color={buttonBgColor}>
            <TextEditor
              value={previewTitle}
              displayToolbar={false}
              textColor={colors.white}
              readOnly
            />
          </TitleBorder>
          <StyledIcon name="play" color={buttonBgColor} />
        </TitleWrapper>
        <TextEditor
          value={previewDescription}
          displayToolbar={false}
          textColor={colors.white}
          readOnly
        />
      </StyledTextWrapper>
    </StyledImageHolder>
  </StyledPreviewBox>
);

Preview3.defaultProps = {
  branding: null,
  showInPreview: false,
  width: 0,
  height: 0,
};

export default Preview3;
