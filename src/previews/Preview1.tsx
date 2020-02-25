import React, { FunctionComponent } from 'react';
import { Colors, Grid } from '@inplayer-org/inplayer-ui';
import { withTheme } from "styled-components";

// Images
import previewImg from 'assets/ip-preview-premium.png';
import restrictedAssetImg from 'assets/restricted-asset.png';
import logo from 'assets/ip-icon-blue.svg';

// Types
import { Branding } from './types';

// Components
import StyledContainer from '../components/StyledContainer';
import TextEditor from '../components/TextEditor';
import {
  OverlayLabel,
  PreviewImage,
  ImageHolder,
  TemplatesButton,
  FooterLink,
} from './styledComponents/SharedComponents';
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
} from './styledComponents/Preview1';

const { Cell } = Grid;

interface Props {
  branding?: Branding;
  assetCountrySetId?: number;
  assetDomainRestrictions?: Array<any>;
  displayBuyButton?: boolean;
  previewNotAvailable?: boolean;
  defaultAssePreviewDetails?: boolean;
  height?: string;
  width?: string;
  theme?: any;
}

const Preview1: FunctionComponent<Props> = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Title</strong></h1>`,
    preview_description: previewDescription = `<p>Description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
    preview_buttons_bg_color: buttonBgColor = Colors.green,
    preview_buttons_text_color: buttonTextColor = Colors.red,
  } = {},
  assetCountrySetId,
  assetDomainRestrictions = [],
  displayBuyButton = true,
  previewNotAvailable,
  width,
  height,
  theme
}: Props) => {
  const isRestrictedAsset = assetCountrySetId || assetDomainRestrictions.length !== 0;
  const assetPreviewImage = isRestrictedAsset ? restrictedAssetImg : imageUrl || previewImg;

  console.error(theme);

  return (
    <StyledPreviewBox minWidth="520px" width={width} height={height} topBorder={previewTopBorder}>
      {previewNotAvailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <ImageHolder>
        <PreviewImage src={assetPreviewImage} />
        <StyledPaywallExplain displayProtectedLabel={protectedLabel} color={Colors.white}>
          <PremiumContent>
            <LockIcon name="lock" />
            <PaywallExplainSpan>
              This premium content requires an account to access.
            </PaywallExplainSpan>
          </PremiumContent>
          <div>
            <Protected>Protected by InPlayer</Protected>
            <a href="https://inplayer.com" target="_blank" rel="noopener noreferrer">
              <Logo src={logo} alt="logo" />
            </a>
          </div>
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
            <TemplatesButton buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
              <p>{previewButtonLabel}</p>
            </TemplatesButton>
          </Cell>
        )}
      </StyledContainer>
      <StyledPreviewFooter color={Colors.fontGray}>
        <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

export default withTheme(Preview1);