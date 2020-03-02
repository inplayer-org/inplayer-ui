// @flow
import React from 'react';
import { transparentize } from 'polished';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Components
import { InPlayerIcon } from 'elements';
import colors from 'config/colors';
import StyledContainer from '../components/StyledContainer';
import TextEditor from '../components/TextEditor';
import { OverlayLabel } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  TextElement,
  Button,
  StyledTextWrapper,
  StyledIconWrapper,
  Icon,
  StyledPreviewImage,
} from './styled';

// Types
import { type Branding } from '../types/branding';

type Props = {
  branding?: Branding,
  displayBuyButton?: boolean,
  previewUnavailable?: boolean,
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal: (e: any) => any,
};

const removeTags = (str: string) =>
  str
    .replace(/<.*?>/g, ' ')
    .replace(/ +/g, ' ')
    .trim();

const Preview4 = ({
  branding: {
    inplayer_protected_label: protectedLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset Title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  },
  displayBuyButton,
  previewUnavailable,
  minWidth,
  minHeight,
  height,
  width,
  isRestrictedAsset,
  handleOpenModal,
}: Props) => {
  const previewTitleText = removeTags(previewTitle);
  const previewDescriptionText = removeTags(previewDescription);
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minWidth={minWidth}
      minHeight={minHeight}
      topBorderColor={buttonBgColor}
      width={width}
      height={height}
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledContainer columns="1fr">
        {displayBuyButton && (
          <Button
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </Button>
        )}
      </StyledContainer>
      <ImageWrapper>
        <StyledIconWrapper backgroundColor={buttonBgColor} protectedLabel={protectedLabel}>
          <Icon>
            <InPlayerIcon name="lock" />
          </Icon>
        </StyledIconWrapper>
        <StyledPreviewImage src={image} />
        <StyledTextWrapper>
          <TextElement width={width}>
            <TextEditor
              value={previewTitle}
              displayToolbar={false}
              textBackground={previewTitleText ? transparentize(0.3, colors.black) : 'none'}
              textColor={buttonBgColor}
              isPadding
              readOnly
            />
          </TextElement>
          <TextElement width={width}>
            <TextEditor
              value={previewDescription}
              displayToolbar={false}
              textBackground={previewDescriptionText ? transparentize(0.3, colors.black) : 'none'}
              textColor={colors.white}
              lineHeight={1.5}
              isPadding
              readOnly
            />
          </TextElement>
        </StyledTextWrapper>
      </ImageWrapper>
    </StyledPreviewBox>
  );
};

Preview4.defaultProps = {
  branding: {},
  displayBuyButton: true,
  previewUnavailable: false,
  minWidth: '700px',
  minHeight: '390px',
  height: undefined,
  width: '700px',
  isRestrictedAsset: false,
};

export default Preview4;
