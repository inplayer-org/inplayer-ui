import React from 'react';

// Colors
import colors from '../../theme/colors';

// Types
import Branding from '../types/branding';

// Components
import { OverlayLabel } from '../shared/PreviewComponents';
import PreviewText from '../shared/PreviewText';
import {
  InPlayerPreviewBox,
  LockIcon,
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
  handleOpenModal?: (e: any) => any;
  loginFooterLabel?: string;
  protectedByLabel?: string;
  premiumContentLabel?: string;
  isRestrictedAsset?: boolean;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = '<h3>Asset title</h3>',
    preview_description: previewDescription = '<p>Asset description</p>',
    preview_button_label: previewButtonLabel = 'Buy',
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
  isRestrictedAsset = false,
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;

  return (
    <InPlayerPreviewBox className="inplayer-preview-box">
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <ImageHolder className="inplayer-imageholder" onClick={handleOpenModal}>
        <PreviewImage
          alt="coverPhoto"
          src={image}
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
        <PreviewText value={previewTitle} className="inplayer-title" />
        <PreviewText value={previewDescription} />
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
    </InPlayerPreviewBox>
  );
};

export default Preview1;
