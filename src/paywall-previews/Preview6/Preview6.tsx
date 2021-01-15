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
} from './styled';
import { PreviewFooterLink } from '../shared/PreviewComponents';

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
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

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
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      id="preview-container"
      minWidth={minWidth}
      minHeight={minHeight}
      width={width}
      height={height}
    >
      <ImageWrapper backgroundImage={image} onClick={handleOpenModal} />
      <ItemDetails>
        <PreviewText value={title} />
        <PreviewText value={description} />
      </ItemDetails>
      <ButtonWrapper>
        <StyledBuyButton
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
};

export default Preview6;
