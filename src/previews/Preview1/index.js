// @flow
import React from 'react';
import colors from 'config/colors';
import { Grid } from 'blocks';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';
import logo from 'assets/images/ip-icon-blue.svg';

// Types
import { type Branding } from '../types/branding';

// Components
import StyledContainer from '../components/StyledContainer';
import TextEditor from '../components/TextEditor';
import {
  OverlayLabel,
  PreviewImage,
  ImageHolder,
  TemplatesButton,
  FooterLink,
} from '../components/SharedComponents';
import {
  StyledCell,
  StyledPreviewBox,
  StyledPaywallExplain,
  Protected,
  PaywallExplainSpan,
  Title,
  Logo,
  LockIcon,
  StyledPreviewFooter,
  PremiumContent,
} from './styled';

const { Cell } = Grid;

type Props = {
  branding?: Branding,
  displayBuyButton?: boolean,
  previewUnavailable?: boolean,
  minWidth?: string,
  height?: string,
  width?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal: (e: any) => any,
};

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Title</strong></h1>`,
    preview_description: previewDescription = `<p>Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  },
  displayBuyButton,
  previewUnavailable,
  width,
  height,
  handleOpenModal,
  minWidth,
  isRestrictedAsset,
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minWidth={minWidth}
      width={width}
      height={height}
      topBorder={previewTopBorder}
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <ImageHolder>
        <PreviewImage src={image} />
        <StyledPaywallExplain displayProtectedLabel={protectedLabel} color={colors.white}>
          <PremiumContent>
            <LockIcon name="lock" />
            <PaywallExplainSpan>
              This premium content requires an account to access.
            </PaywallExplainSpan>
          </PremiumContent>
          <PremiumContent>
            <Protected>Protected by InPlayer</Protected>
            <a href="https://inplayer.com" target="_blank" rel="noopener noreferrer">
              <Logo src={logo} alt="logo" />
            </a>
          </PremiumContent>
        </StyledPaywallExplain>
      </ImageHolder>
      <StyledContainer height="30%" columns="1fr 10rem" margin="0.5rem 0">
        <StyledCell middle>
          <Title>
            <TextEditor value={previewTitle} displayToolbar={false} readOnly />
          </Title>
          <TextEditor value={previewDescription} displayToolbar={false} readOnly />
        </StyledCell>
        {displayBuyButton && (
          <Cell middle>
            <TemplatesButton
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              <p>{previewButtonLabel}</p>
            </TemplatesButton>
          </Cell>
        )}
      </StyledContainer>
      <StyledPreviewFooter color={colors.fontGray}>
        <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

Preview1.defaultProps = {
  branding: {},
  displayBuyButton: true,
  previewUnavailable: false,
  minWidth: '520px',
  width: undefined,
  height: undefined,
  isRestrictedAsset: false,
};

export default Preview1;
