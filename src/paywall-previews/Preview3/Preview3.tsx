import React from 'react';

// Images
import { GiCutDiamond } from 'react-icons/gi';

// Colors
import colors from '../../theme/colors';

// Components
import FooterText from '../shared/FooterText';
import PreviewText from '../shared/PreviewText';
import { RestrictedAssetContainer, StyledPaywallDescription } from '../shared/PreviewComponents';
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
  branding?: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
  isAuthenticated?: boolean;
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
  isAuthenticated = false,
}: Props) => {
  // const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  // eslint-disable-next-line no-param-reassign
  isRestrictedAsset = true;
  const image = imageUrl;
  // eslint-disable-next-line no-param-reassign
  premiumContentLabel = 'This content is not available in your country';

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
          <FooterText isAuthenticated={isAuthenticated} loginFooterLabel={loginFooterLabel} />
        </Header>
        <StyledTextWrapper onClick={handleOpenModal}>
          <StyledPaywallDescription color={buttonBgColor} hasProtectedByLabel={hasProtectedByLabel}>
            {isRestrictedAsset ? (
              <RestrictedAssetContainer>{premiumContentLabel}</RestrictedAssetContainer>
            ) : (
              <PaywallDescriptionSpan>
                <GiCutDiamond /> {premiumContentLabel}
              </PaywallDescriptionSpan>
            )}
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
