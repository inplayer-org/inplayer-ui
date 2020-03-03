// @flow
import React from 'react';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import { type Branding } from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import {
  StyledPreviewBox,
  ImageWrapper,
  ItemDetails,
  FootService,
  ButtonWrapper,
  Button,
  PreviewFooter,
  FooterLink,
  IconHolder,
  Icon,
} from './styled';

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
    preview_title: title = '<h1><strong>Title</strong></h1>',
    preview_description: description = '<p>Description</p>',
    preview_button_label: buttonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
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
        <FootService>
          <ButtonWrapper>
            <Button
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              <p>{buttonLabel}</p>
            </Button>
          </ButtonWrapper>
          <PreviewFooter>
            <FooterLink href="#login" onClick={handleOpenModal}>
              {loginFooterLabel}
            </FooterLink>
            <IconHolder>
              <Icon name="lock" />
            </IconHolder>
          </PreviewFooter>
        </FootService>
      </ItemDetails>
    </StyledPreviewBox>
  );
};

Preview6.defaultProps = {
  branding: {},
  minWidth: undefined,
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview6;
