import React from 'react';
import colors from 'theme/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Components
import { GiCutDiamond } from 'react-icons/gi';
import TextEditor from '../components/TextEditor';
import { StyledPaywallDescription } from '../components/SharedComponents';
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

type Preview3Props = {
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
};

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_top_border: previewTopBorder = true,
    inplayer_protected_label: protectedLabel = true,
  },
  width,
  height,
  minWidth,
  minHeight,
  handleOpenModal,
  isRestrictedAsset,
  loginFooterLabel,
}: Preview3Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minHeight={minHeight}
      minWidth={minWidth}
      color={previewTopBorder ? buttonBgColor : ''}
      width={width}
      height={height}
    >
      <StyledImageHolder backgroundImage={image}>
        <Header onClick={handleOpenModal} color={colors.fontLightGray}>
          {loginFooterLabel}
        </Header>
        <StyledTextWrapper onClick={handleOpenModal}>
          <StyledPaywallDescription color={buttonBgColor} displayProtectedLabel={protectedLabel}>
            <PaywallDescriptionSpan>
              <GiCutDiamond /> premium content
            </PaywallDescriptionSpan>
          </StyledPaywallDescription>
          <TitleWrapper>
            <TitleBorder color={buttonBgColor}>
              <TextEditor
                value={previewTitle}
                displayToolbar={false}
                textColor={colors.white}
                readOnly
              />
            </TitleBorder>
            <StyledIcon color={buttonBgColor} />
          </TitleWrapper>
          <DescriptionWrapper>
            <TextEditor
              value={previewDescription}
              displayToolbar={false}
              textColor={colors.white}
              readOnly
            />
          </DescriptionWrapper>
        </StyledTextWrapper>
      </StyledImageHolder>
    </StyledPreviewBox>
  );
};

Preview3.defaultProps = {
  branding: {},
  minWidth: '250px',
  minHeight: undefined,
  height: undefined,
  width: undefined,
  isRestrictedAsset: false,
  handleOpenModal: () => {},
  loginFooterLabel: 'Already have access? Login with your InPlayer account',
};

export default Preview3;
