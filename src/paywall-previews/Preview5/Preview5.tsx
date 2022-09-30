import React from 'react';
import { lighten } from 'polished';

// Colors
import colors from '../../theme/colors';

// Types
import PreviewText from '../shared/PreviewText';
import Branding from '../types/branding';

// Components
import {
  StyledRestrictedAssetContainer,
  RestrictedAssetIcon,
  StyledPaywallDescription,
} from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  Overlay,
  BuyButtonHolder,
  BuyButtonBorder,
  StyledBuyButton,
  ItemDetails,
  StyledIcon,
  PaywallDescriptionSpan,
  TitleHolder,
  DescriptionHolder,
} from './styled';

type Props = {
  branding?: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
  restrictedMessage?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';

const Preview5 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = lighten(0.01, colors.green),
    preview_buttons_text_color: buttonTextColor = colors.black,
    inplayer_protected_label: hasProtectedByLabel = true,
  } = {},
  width = '',
  height = '',
  minHeight = '420px',
  minWidth = '250px',
  handleOpenModal,
  isRestrictedAsset = false,
  premiumContentLabel = 'Premium content',
  restrictedMessage = 'This content is not available.',
}: Props) => (
  <StyledPreviewBox
    id="preview-container"
    minHeight={minHeight}
    minWidth={minWidth}
    width={width}
    height={height}
  >
    <ImageWrapper height={height} backgroundImage={imageUrl} onClick={handleOpenModal}>
      {isRestrictedAsset && (
        // Call handleOpenModal here because this div element will be
        // on the top of all image elements in case of restricted asset
        <StyledRestrictedAssetContainer onClick={handleOpenModal}>
          <RestrictedAssetIcon />
          {restrictedMessage}
        </StyledRestrictedAssetContainer>
      )}
      <Overlay />
      <BuyButtonHolder>
        <BuyButtonBorder>
          <StyledBuyButton
            tag="button_buy_preview"
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </StyledBuyButton>
        </BuyButtonBorder>
      </BuyButtonHolder>
    </ImageWrapper>
    <ItemDetails height={height}>
      <StyledPaywallDescription
        color={lighten(0.01, buttonBgColor)}
        hasProtectedByLabel={hasProtectedByLabel}
      >
        <StyledIcon />
        <PaywallDescriptionSpan>{premiumContentLabel}</PaywallDescriptionSpan>
      </StyledPaywallDescription>
      <TitleHolder>
        <PreviewText value={previewTitle} />
      </TitleHolder>
      <DescriptionHolder>
        <PreviewText value={previewDescription} />
      </DescriptionHolder>
    </ItemDetails>
  </StyledPreviewBox>
);

export default Preview5;
