import React from 'react';
import styled from 'styled-components';

// Images
import { FaLock } from 'react-icons/fa';

// Colors
import colors from '../../theme/colors';

// Components
import PreviewText from '../shared/PreviewText';
import FooterText from '../shared/FooterText';
import {
  StyledPreviewBox,
  ImageWrapper,
  ItemDetails,
  ButtonWrapper,
  PreviewFooter,
  IconHolder,
  StyledBuyButton,
  StyledRestrictedAssetContainer,
} from './styled';
import { PreviewFooterLink, RestrictedAssetIcon } from '../shared/PreviewComponents';

// Types
import Branding from '../types/branding';

const LockIcon = styled(FaLock)`
  color: ${({ theme }) => theme.palette.text.light};
`;

type Props = {
  branding?: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  isAuthenticated?: boolean;
  premiumContentLabel?: string;
  restrictedMessage?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';

const Preview6 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: title = '<h3>Asset title</h3>',
    preview_description: description = '<p>Asset description</p>',
    preview_button_label: buttonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
    inplayer_protected_label: hasProtectedByLabel = true,
  } = {},
  handleOpenModal,
  minWidth = '250px',
  minHeight = '',
  height = '',
  width = '',
  isRestrictedAsset = false,
  loginFooterLabel = 'Already have access? Login with your InPlayer account',
  isAuthenticated = false,
  restrictedMessage = 'This content is not available in your current location.',
}: Props) => (
  <StyledPreviewBox
    id="preview-container"
    minWidth={minWidth}
    minHeight={minHeight}
    width={width}
    height={height}
  >
    <ImageWrapper
      isRestrictedAsset={isRestrictedAsset}
      backgroundImage={imageUrl}
      onClick={handleOpenModal}
    />
    {isRestrictedAsset && (
      <StyledRestrictedAssetContainer fontSize="14px" onClick={handleOpenModal}>
        <RestrictedAssetIcon size="5rem" />
        {restrictedMessage}
      </StyledRestrictedAssetContainer>
    )}

    <ItemDetails>
      <PreviewText value={title} />
      <PreviewText value={description} />
    </ItemDetails>
    <ButtonWrapper>
      <StyledBuyButton
        tag="button_buy_preview"
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        onClick={handleOpenModal}
      >
        {buttonLabel}
      </StyledBuyButton>
    </ButtonWrapper>
    <PreviewFooter>
      <PreviewFooterLink href="#login" onClick={handleOpenModal}>
        <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
      </PreviewFooterLink>
      <IconHolder hasProtectedByLabel={hasProtectedByLabel}>
        <LockIcon />
      </IconHolder>
    </PreviewFooter>
  </StyledPreviewBox>
);

export default Preview6;
