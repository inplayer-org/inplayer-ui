import React from 'react';
import { FaLock } from 'react-icons/fa';

// Images
import previewImg from '../../assets/images/ip-preview-premium.png';
import restrictedAssetImg from '../../assets/images/restricted-asset.png';
import colors from '../../theme/colors';

// Types

import Branding from '../types/branding';

// Components
import { OverlayLabel, PreviewFooterLink } from '../shared/PreviewComponents';
import TextEditor from '../shared/TextEditor';
import {
  StyledPreviewBox,
  StyledImageWrapper,
  StyledPreviewImage,
  StyledIconWrapper,
  ItemDetails,
  PreviewHeader,
  ItemContent,
  ButtonWrapper,
  StyledBuyButton,
  StyledPreviewFooter,
} from './styled';

type Props = {
  /**
   * Branding type
   */
  branding?: Branding;
  /**
   * Whether to show the button or not
   */
  displayBuyButton?: boolean;
  /**
   * Preview unavailable
   */
  previewUnavailable?: boolean;
  /**
   * Minimum width
   */
  minWidth?: string;
  /**
   * Minimum height
   */
  minHeight?: string;
  /**
   * Preview height
   */
  height?: string;
  /**
   * Preview width
   */
  width?: string;
  /**
   * Login footer label
   */
  loginFooterLabel?: string;
  /**
   * Whether the asset is restricted or not
   */
  isRestrictedAsset?: boolean;
  /**
   * Function which handles the modal state changes
   */
  handleOpenModal?: (e: any) => any;
};

const Preview7 = ({
  branding: {
    preview_top_border: hasPreviewTopBorder = true,
    inplayer_protected_label: hasProtectedByLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  handleOpenModal,
  displayBuyButton = true,
  previewUnavailable = false,
  minWidth = '280px',
  minHeight = '460px',
  height = '',
  width = '',
  isRestrictedAsset = false,
  loginFooterLabel = 'Already have access? Login with your InPlayer account',
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      id="preview-container"
      minWidth={minWidth}
      minHeight={minHeight}
      hasPreviewTopBorder={hasPreviewTopBorder}
      circleImage
      width={width}
      height={height}
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledImageWrapper onClick={handleOpenModal}>
        <StyledPreviewImage src={image} imageWidth="250px" imageBorderRadius />
        <StyledIconWrapper
          backgroundColor={buttonBgColor}
          hasProtectedByLabel={hasProtectedByLabel}
        >
          <FaLock />
        </StyledIconWrapper>
      </StyledImageWrapper>
      <ItemDetails>
        <PreviewHeader variant="h4">
          <TextEditor value={previewTitle} isTextCenter readOnly padding="0 0 0.5rem 0" />
        </PreviewHeader>
        <ItemContent variant="p">
          <TextEditor value={previewDescription} isTextCenter readOnly />
        </ItemContent>
      </ItemDetails>
      {displayBuyButton && (
        <ButtonWrapper>
          <StyledBuyButton
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </StyledBuyButton>
        </ButtonWrapper>
      )}
      <StyledPreviewFooter color={colors.fontGray}>
        <PreviewFooterLink href="#login" onClick={handleOpenModal}>
          {loginFooterLabel}
        </PreviewFooterLink>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

export default Preview7;
