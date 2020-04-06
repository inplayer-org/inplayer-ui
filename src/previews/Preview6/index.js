// @flow
import React from 'react';
import colors from 'config/colors';

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
import { type Branding } from '../types/branding';

const LockIcon = styled(FaLock)`
  color: ${colors.fontGray};
`;

type Props = {
  branding?: Branding,
  width?: string,
  height?: string,
  minHeight?: string,
  minWidth?: string,
  loginFooterLabel?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal?: (e: any) => any,
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
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox minWidth={minWidth} minHeight={minHeight} width={width} height={height}>
      <ImageWrapper backgroundImage={image} />
      <ItemDetails>
        <TextEditor value={title} displayToolbar={false} readOnly />
        <TextEditor value={description} displayToolbar={false} readOnly />
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
