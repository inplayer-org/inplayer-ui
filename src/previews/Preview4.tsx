import React, { FunctionComponent } from 'react';
import { Colors, InPlayerIcon } from '@inplayer-org/inplayer-ui';
import { transparentize } from 'polished';
import { withTheme } from "styled-components";

// Images
import previewImg from 'assets/ip-preview-premium.png';
import restrictedAssetImg from 'assets/restricted-asset.png';

// Types
import { Branding } from './types';

// Components
import StyledContainer from '../components/StyledContainer';
import TextEditor from '../components/TextEditor';
import { OverlayLabel, PreviewImage } from './styledComponents/SharedComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  TextElement,
  Button,
  StyledTextWrapper,
  StyledIconWrapper,
  Icon,
} from './styledComponents/Preview4';

interface Props {
  branding?: Branding;
  assetCountrySetId?: number;
  assetDomainRestrictions?: Array<any>;
  displayBuyButton?: boolean;
  previewNotAvailable?: boolean;
  defaultAssePreviewDetails?: boolean;
  isFullPreview?: boolean;
  width?: string;
  height?: string;
  theme?: any;
}

const removeTags = (str: string) =>
  str
    .replace(/<.*?>/g, ' ')
    .replace(/ +/g, ' ')
    .trim();

const Preview4: FunctionComponent<Props> = ({
  branding: {
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
  isFullPreview = false,
  width,
  height,
}: Props) => {
  const isRestrictedAsset = assetCountrySetId || assetDomainRestrictions.length !== 0;
  const assetPreviewImage = isRestrictedAsset ? restrictedAssetImg : imageUrl || previewImg;

  const previewTitleText = removeTags(previewTitle);
  const previewDescriptionText = removeTags(previewDescription);
  const widthNumber = width ? Number(width.slice(0, -1)) : 0;

  return (
    <StyledPreviewBox
      minHeight="390px"
      topBorderColor={buttonBgColor}
      isFullPreview={isFullPreview}
      width={width}
      height={height}
    >
      {previewNotAvailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledContainer columns="1fr">
        {displayBuyButton && (
          <Button buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
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
        <PreviewImage src={assetPreviewImage} />
        <StyledTextWrapper isFullPreview={isFullPreview}>
          <TextElement width={widthNumber}>
            <TextEditor
              value={previewTitle}
              displayToolbar={false}
              textBackground={previewTitleText ? transparentize(0.3, Colors.black) : 'none'}
              textColor={buttonBgColor}
              isPadding
              readOnly
            />
          </TextElement>
          <TextElement width={widthNumber}>
            <TextEditor
              value={previewDescription}
              displayToolbar={false}
              textBackground={previewDescriptionText ? transparentize(0.3, Colors.black) : 'none'}
              textColor={Colors.white}
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

export default withTheme(Preview4);