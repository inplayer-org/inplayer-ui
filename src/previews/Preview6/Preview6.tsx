import React from 'react';
import colors from 'theme/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Components
import { FaLock } from 'react-icons/fa';
import styled from 'styled-components';
import TextEditor from '../components/TextEditor';
import {
  StyledPreviewBox,
  ImageWrapper,
  ItemDetails,
  FootService,
  ButtonWrapper,
  PreviewFooter,
  IconHolder,
} from './styled';
import { BuyButton, PreviewFooterLink } from '../components/SharedComponents';

// Types
import Branding from '../types/branding';

const LockIcon = styled(FaLock)`
  color: ${colors.fontGray};
`;

type Preview6Props = {
  /**
   * Branding type
   */
  branding: Branding;
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

const Preview6 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: title = '<h3>Asset title</h3>',
    preview_description: description = '<p>Asset description</p>',
    preview_button_label: buttonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
    inplayer_protected_label: protectedLabel = true,
  } = {},
  width,
  height,
  minWidth,
  minHeight,
  handleOpenModal,
  isRestrictedAsset,
  loginFooterLabel,
}: Preview6Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox minWidth={minWidth} minHeight={minHeight} width={width} height={height}>
      <ImageWrapper backgroundImage={image} />
      <ItemDetails>
        <TextEditor value={title} readOnly />
        <TextEditor value={description} readOnly />
      </ItemDetails>
      <FootService>
        <ButtonWrapper>
          <BuyButton
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {buttonLabel}
          </BuyButton>
        </ButtonWrapper>
        <PreviewFooter>
          <PreviewFooterLink href="#login" onClick={handleOpenModal}>
            {loginFooterLabel}
          </PreviewFooterLink>
          <IconHolder protectedLabel={protectedLabel}>
            <LockIcon />
          </IconHolder>
        </PreviewFooter>
      </FootService>
    </StyledPreviewBox>
  );
};

Preview6.defaultProps = {
  branding: {},
  minWidth: '250px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview6;
