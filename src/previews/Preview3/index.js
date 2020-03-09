// @flow
import React from 'react';
import { InPlayerIcon } from 'elements';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Components
import { GiCutDiamond } from 'react-icons/gi';
import TextEditor from '../components/TextEditor';
import { PaywallDescription } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  TitleWrapper,
  StyledImageHolder,
  PaywallDescriptionSpan,
  StyledTextWrapper,
  Header,
  StyledIcon,
  TitleBorder,
} from './styled';

// Types
import { Branding } from '../types/branding';

type OwnProps = {
  branding?: Branding,
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  loginFooterLabel?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal?: (e: any) => any,
};

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
  },
  width,
  height,
  minWidth,
  minHeight,
  handleOpenModal,
  isRestrictedAsset,
  loginFooterLabel,
}: OwnProps) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minHeight={minHeight}
      minWidth={minWidth}
      color={buttonBgColor}
      width={width}
      height={height}
    >
      <StyledImageHolder backgroundImage={image}>
        <Header onClick={handleOpenModal} color={colors.fontLightGray}>
          {loginFooterLabel}
        </Header>
        <StyledTextWrapper onClick={handleOpenModal}>
          <PaywallDescription color={buttonBgColor}>
            <PaywallDescriptionSpan>
              <GiCutDiamond /> premium content
            </PaywallDescriptionSpan>
          </PaywallDescription>
          <TitleWrapper>
            <TitleBorder color={buttonBgColor}>
              <TextEditor
                value={previewTitle}
                displayToolbar={false}
                textColor={colors.white}
                readOnly
              />
            </TitleBorder>
            <StyledIcon color={buttonBgColor} />
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
};

Preview3.defaultProps = {
  branding: {},
  minWidth: '700px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview3;
