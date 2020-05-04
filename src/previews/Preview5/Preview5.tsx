import React from 'react';
import colors from 'theme/colors';
import { lighten } from 'polished';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import TextEditor from '../shared/TextEditor';
import Branding from '../types/branding';

// Components
import { StyledPaywallDescription } from '../shared/PreviewComponents';
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
   * Whether the asset is restricted or not
   */
  isRestrictedAsset?: boolean;
  /**
   * Function which handles the modal state changes
   */
  handleOpenModal?: (e: any) => any;
};

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
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox minHeight={minHeight} minWidth={minWidth} width={width} height={height}>
      <ImageWrapper height={height} backgroundImage={image}>
        <Overlay />
        <BuyButtonHolder>
          <BuyButtonBorder>
            <StyledBuyButton
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
          <PaywallDescriptionSpan>Premium content</PaywallDescriptionSpan>
        </StyledPaywallDescription>
        <TitleHolder>
          <TextEditor value={previewTitle} readOnly />
        </TitleHolder>
        <DescriptionHolder>
          <TextEditor value={previewDescription} readOnly />
        </DescriptionHolder>
      </ItemDetails>
    </StyledPreviewBox>
  );
};

export default Preview5;
