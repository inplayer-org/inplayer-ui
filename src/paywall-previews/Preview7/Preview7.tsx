import React from 'react';
import { FaLock } from 'react-icons/fa';

// Clors
import colors from '../../theme/colors';

// Types
import Branding from '../types/branding';

// Components
import FooterText from '../shared/FooterText';
import {
  OverlayLabel,
  PreviewFooterLink,
  RestrictedAssetContainer,
  RestrictedAssetIcon,
} from '../shared/PreviewComponents';
import PreviewText from '../shared/PreviewText';
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
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  isAuthenticated?: boolean;
  premiumContentLabel?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

const Preview7 = ({
  branding: {
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
  isAuthenticated = false,
  premiumContentLabel = 'Premium content',
}: Props) => (
  <StyledPreviewBox
    id="preview-container"
    minWidth={minWidth}
    minHeight={minHeight}
    width={width}
    height={height}
  >
    {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
    <StyledImageWrapper onClick={handleOpenModal}>
      <StyledPreviewImage
        isRestrictedAsset={isRestrictedAsset}
        src={imageUrl}
        imageWidth="250px"
        imageBorderRadius
      />
      {isRestrictedAsset && (
        <RestrictedAssetContainer fontSize="14px">
          <RestrictedAssetIcon size="4rem" />
          {premiumContentLabel}
        </RestrictedAssetContainer>
      )}
      <StyledIconWrapper backgroundColor={buttonBgColor} hasProtectedByLabel={hasProtectedByLabel}>
        <FaLock />
      </StyledIconWrapper>
    </StyledImageWrapper>
    <ItemDetails>
      <PreviewHeader variant="h4">
        <PreviewText value={previewTitle} isTextCenter padding="0 0 0.5rem 0" />
      </PreviewHeader>
      <ItemContent variant="p">
        <PreviewText value={previewDescription} isTextCenter />
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
    <StyledPreviewFooter>
      <PreviewFooterLink href="#login" onClick={handleOpenModal}>
        <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
      </PreviewFooterLink>
    </StyledPreviewFooter>
  </StyledPreviewBox>
);

export default Preview7;
