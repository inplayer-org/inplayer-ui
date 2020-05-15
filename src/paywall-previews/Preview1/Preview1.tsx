import React from 'react';
import colors from 'theme/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import Branding from '../types/branding';

// Components
import { OverlayLabel } from '../shared/PreviewComponents';
import {
  LockIcon,
  InplayerPreviewBox,
  ImageHolder,
  PaywallExplain,
  InplayerWhiteLogo,
  ItemDetails,
  BuyButtonWrapper,
  BuyButton,
  InplayerFooter,
  PreviewImage,
} from './styled';

type Props = {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  minWidth?: string;
  height?: string;
  width?: string;
  handleOpenModal?: (e: any) => any;
  loginFooterLabel?: string;
  protectedByLabel?: string;
  premiumContentLabel?: string;
};

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle,
    preview_description: previewDescription,
    preview_button_label: previewButtonLabel,
    preview_top_border: hasPreviewTopBorder = false,
    inplayer_protected_label: hasProtectedByLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  displayBuyButton = true,
  previewUnavailable = false,
  loginFooterLabel = 'Already have access? Login with your account.',
  handleOpenModal,
  protectedByLabel = 'Protected by',
  premiumContentLabel = 'Premium content',
}: Props) => {
  const isHtmlTitle = previewTitle.includes('</');

  return (
    <InplayerPreviewBox hasPreviewTopBorder={hasPreviewTopBorder} className="inplayer-preview-box">
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <ImageHolder className="inplayer-imageholder">
        <PreviewImage
          alt="coverPhoto"
          src={imageUrl}
          role="presentation"
          className="inplayer-paywall"
        />
        <PaywallExplain
          hasProtectedByLabel={hasProtectedByLabel}
          className="inplayer-paywallexplain"
        >
          <InplayerWhiteLogo id="inplayer-whitelogo">
            <strong>{protectedByLabel} inplayer</strong>
            <a href="https://inplayer.com">InPlayer Paywall</a>
          </InplayerWhiteLogo>
          <LockIcon className="inplayer-lock" />
          <span>{premiumContentLabel}</span>
        </PaywallExplain>
      </ImageHolder>
      <ItemDetails className="inplayer-itemdetails">
        {isHtmlTitle ? (
          <div
            dangerouslySetInnerHTML={{
              __html: previewTitle,
            }}
            className="inplayer-title"
          />
        ) : (
          <h3 className="inplayer-title">{previewTitle}</h3>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: previewDescription,
          }}
        />
      </ItemDetails>
      {displayBuyButton && (
        <BuyButtonWrapper className="inplayer-buybutton">
          <BuyButton
            className="inplayer-button inplayer-submit-button"
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </BuyButton>
        </BuyButtonWrapper>
      )}
      <InplayerFooter className="inplayer-preview-footer">
        <div className="inplayer-guest-footer">
          <a href="#login" onClick={handleOpenModal}>
            <span>{loginFooterLabel}</span>
          </a>
        </div>
      </InplayerFooter>
    </InplayerPreviewBox>
  );
};

export default Preview1;
