// @flow
import React from 'react';
import { InPlayerIcon } from 'elements';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import { Branding } from '../types/branding';

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
  minWidth?: string,
  minHeight?: string,
  handleOpenModal: (e: any) => any,
};

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
  },
  showInPreview,
  width,
  height,
  minWidth,
  minHeight,
  handleOpenModal,
}: OwnProps) => (
  <StyledPreviewBox
    minHeight={minHeight}
    minWidth={minWidth}
    color={buttonBgColor}
    width={width}
    height={height}
  >
    <StyledImageHolder backgroundImage={imageUrl}>
      <Header color={colors.fontLightGray}>
        Already have access? Login with your InPlayer account
      </Header>
      <StyledTextWrapper showInPreview={showInPreview} onClick={handleOpenModal}>
        <PaywallExplain color={buttonBgColor}>
          <PaywallExplainSpan>
            <InPlayerIcon name="diamond" /> premium content
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
  branding: {},
  showInPreview: true,
  minWidth: '450px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
};

export default Preview3;
