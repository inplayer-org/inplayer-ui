import React from 'react';
import { transparentize } from 'polished';

// Images
import { FaLock } from 'react-icons/fa';

// Colors
import colors from '../../theme/colors';

// Components
import StyledContainer from '../shared/StyledContainer';
import PreviewText from '../shared/PreviewText';
import {
  OverlayLabel,
  RestrictedAssetContainer,
  RestrictedAssetIcon,
} from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledButton,
  ImageWrapper,
  StyledIconWrapper,
  Icon,
  StyledPreviewImage,
  StyledTextWrapper,
  TextElement,
} from './styled';

// Types
import Branding from '../types/branding';

type Props = {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  restrictedMessage?: string;
};

const removeTags = (str: string) => str.replace(/<.*?>/g, ' ').replace(/ +/g, ' ').trim();
const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';

const Preview4 = ({
  branding: {
    inplayer_protected_label: hasProtectedByLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  displayBuyButton = true,
  previewUnavailable = false,
  minWidth = '250px',
  minHeight = '390px',
  height = '',
  width = '',
  isRestrictedAsset = false,
  handleOpenModal,
  restrictedMessage = 'This content is not available.',
}: Props) => {
  const previewTitleText = removeTags(previewTitle);
  const previewDescriptionText = removeTags(previewDescription);
  return (
    <StyledPreviewBox
      id="preview-container"
      minWidth={minWidth}
      minHeight={minHeight}
      width={width}
      height={height}
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledContainer columns="1fr">
        {displayBuyButton && (
          <StyledButton
            tag="button_buy_preview"
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </StyledButton>
        )}
      </StyledContainer>
      {isRestrictedAsset && (
        <RestrictedAssetContainer onClick={handleOpenModal}>
          <RestrictedAssetIcon />
          {restrictedMessage}
        </RestrictedAssetContainer>
      )}
      <ImageWrapper onClick={handleOpenModal} isRestrictedAsset={isRestrictedAsset}>
        <StyledIconWrapper
          backgroundColor={buttonBgColor}
          hasProtectedByLabel={hasProtectedByLabel}
        >
          <Icon>
            <FaLock />
          </Icon>
        </StyledIconWrapper>
        <StyledPreviewImage src={imageUrl} />
        <StyledTextWrapper>
          <TextElement width={width}>
            <PreviewText
              value={previewTitle}
              textBackground={previewTitleText ? transparentize(0.3, colors.black) : 'none'}
              textColor={buttonBgColor}
              padding="0.5rem"
            />
          </TextElement>
          <TextElement width={width}>
            <PreviewText
              value={previewDescription}
              textBackground={previewDescriptionText ? transparentize(0.3, colors.black) : 'none'}
              textColor={colors.white}
              lineHeight={1.5}
              padding="0.5rem"
            />
          </TextElement>
        </StyledTextWrapper>
      </ImageWrapper>
    </StyledPreviewBox>
  );
};

export default Preview4;
