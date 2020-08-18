import React from 'react';

// Images
import { GiCutDiamond } from 'react-icons/gi';

// Colors
import colors from '../../theme/colors';

// Components
import PreviewText from '../shared/PreviewText';
import { StyledPaywallDescription } from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  Header,
  StyledTextWrapper,
  PaywallDescriptionSpan,
  TitleWrapper,
  TitleBorder,
  StyledIcon,
  DescriptionWrapper,
} from './styled';

// Types
import Branding from '../types/branding';

type Props = {
  /**
   * Branding type
   */
  branding?: Branding;
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
  // premium content label
  premiumContentLabel?: string;
};

const previewImg = 'https://assets.inplayer.com/images/preview-premium.jpg';
const restrictedAssetImg = 'https://assets.inplayer.com/images/restricted-asset.png';

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    inplayer_protected_label: hasProtectedByLabel = true,
  } = {},
  minWidth = '',
  minHeight = '',
  height = '',
  width = '',
  isRestrictedAsset = false,
  handleOpenModal,
  loginFooterLabel = 'Already have access? Login with your InPlayer account',
  premiumContentLabel = 'Premium content',
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      id="preview-container"
      minHeight={minHeight}
      minWidth={minWidth}
      width={width}
      height={height}
    >
      <StyledImageHolder backgroundImage={image} onClick={handleOpenModal}>
        <Header onClick={handleOpenModal} color={colors.fontLightGray}>
          {loginFooterLabel}
        </Header>
        <StyledTextWrapper onClick={handleOpenModal}>
          <StyledPaywallDescription color={buttonBgColor} hasProtectedByLabel={hasProtectedByLabel}>
            <PaywallDescriptionSpan>
              <GiCutDiamond /> {premiumContentLabel}
            </PaywallDescriptionSpan>
          </StyledPaywallDescription>
          <TitleWrapper>
            <TitleBorder color={buttonBgColor}>
              <PreviewText value={previewTitle} textColor={colors.white} />
            </TitleBorder>
            <StyledIcon color={buttonBgColor} />
          </TitleWrapper>
          <DescriptionWrapper>
            <PreviewText value={previewDescription} textColor={colors.white} />
          </DescriptionWrapper>
        </StyledTextWrapper>
      </StyledImageHolder>
    </StyledPreviewBox>
  );
};

export default Preview3;
