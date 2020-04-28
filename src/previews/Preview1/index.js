// @flow
import React from 'react';
import colors from 'config/colors';
import styled from 'styled-components';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';
import logo from 'assets/images/ip-icon-blue.svg';

// Types
import { type Branding } from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import { OverlayLabel, PreviewImage, FooterLink } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  StyledPaywallDescription,
  PremiumContent,
  LockIcon,
  PaywallDescriptionSpan,
  Protected,
  Logo,
  ItemDetails,
  Title,
  BuyButtonWrapper,
  StyledBuyButton,
  StyledPreviewFooter,
} from './styled';

type Props = {
  branding?: Branding,
  displayBuyButton?: boolean,
  previewUnavailable?: boolean,
  minWidth?: string,
  height?: string,
  width?: string,
  loginFooterLabel?: string,
  isRestrictedAsset?: boolean,
  handleOpenModal?: (e: any) => any,
};

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 100%;
`;

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
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
  loginFooterLabel,
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;

  return (
    <StyledPreviewBox
      minWidth={minWidth}
      width={width}
      height={height}
      topBorder={previewTopBorder}
      className="inplayer-preview-box"
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledImageHolder className="inplayer-imageholder">
        <PreviewImage src={image} />
        <StyledPaywallDescription
          className="inplayer-paywallexplain"
          displayProtectedLabel={protectedLabel}
          color={colors.white}
        >
          <PremiumContent>
            <LockIcon name="lock" />
            <PaywallDescriptionSpan>
              This premium content requires an account to access.
            </PaywallDescriptionSpan>
          </PremiumContent>
          <PremiumContent>
            <Protected>Protected by InPlayer</Protected>
            <a href="https://inplayer.com" target="_blank" rel="noopener noreferrer">
              <Logo src={logo} alt="logo" />
            </a>
          </PremiumContent>
        </StyledPaywallDescription>
      </StyledImageHolder>
      <FlexContainer>
        <ItemDetails className="inplayer-itemdetails">
          <Title variant="h3" className="inplayer-title">
            <TextEditor value={previewTitle} displayToolbar={false} readOnly />
          </Title>
          <TextEditor value={previewDescription} displayToolbar={false} readOnly />
        </ItemDetails>
        {displayBuyButton && (
          <BuyButtonWrapper className="inplayer-buybutton">
            <StyledBuyButton
              className="inplayer-button"
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              {previewButtonLabel}
            </StyledBuyButton>
          </BuyButtonWrapper>
        )}
      </FlexContainer>
      <StyledPreviewFooter className="inplayer-preview-footer" color={colors.fontGray}>
        <FooterLink href="#login" onClick={handleOpenModal}>
          {loginFooterLabel}
        </FooterLink>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

Preview1.defaultProps = {
  branding: {},
  displayBuyButton: true,
  previewUnavailable: false,
  minWidth: '250px',
  width: undefined,
  height: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview1;
