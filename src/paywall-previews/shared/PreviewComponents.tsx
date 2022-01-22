import { darken, transparentize } from 'polished';
import styled from 'styled-components';
import { prop } from 'styled-tools';

// utils
import { MdDoNotDisturbAlt } from 'react-icons/md';
import colors from '../../theme/colors';

// components
import { Typography, Button } from '../../components';

export interface PreviewBoxProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

export const PreviewBox = styled.div<PreviewBoxProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '580px'};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  border: 1px solid ${colors.gray};
  clear: both;
  padding: 18px 0;
  background: ${({ theme }) => theme.palette.background.main};
  background-size: 100% 4px;
  position: relative;
  transition: all ease 200ms;
  box-sizing: border-box;
  margin: 24px auto;
`;

export interface PreviewImageProps {
  imageBorderRadius?: boolean;
  imageWidth?: string;
}

export const PreviewImage = styled.img<PreviewImageProps>`
  width: ${prop('imageWidth', '100%')};
  border-radius: ${({ imageBorderRadius }) => imageBorderRadius && '50%'};
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
  border: 0;
  height: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
`;

export const OverlayLabel = styled(Typography)`
  color: ${colors.white};
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  text-align: center;
  z-index: 30;
  background: ${transparentize(0.5, colors.black)};
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 62%;
  margin: 0 0 2%;
  overflow: hidden;
  display: block;
  position: relative;
  background: ${colors.mint};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

export const PaywallDescription = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

interface StyledPaywallDescriptionProps {
  hasProtectedByLabel?: boolean;
}

export const StyledPaywallDescription = styled(PaywallDescription)<StyledPaywallDescriptionProps>`
  display: ${({ hasProtectedByLabel }) => (hasProtectedByLabel ? 'block' : 'none')};
`;

type IconWrapperProps = {
  backgroundColor?: string;
  hasProtectedByLabel?: boolean;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  display: ${({ hasProtectedByLabel }) => (hasProtectedByLabel ? 'block' : 'none')};
  position: absolute;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionSpan = styled.span`
  vertical-align: middle;
  display: inline-block;
  text-align: left;
  margin: 0;
  position: relative;
  line-height: 15px;
  padding: 0;
`;

type BuyButtonProps = {
  buttonTextColor?: string;
  buttonBgColor: string;
};

export const BuyButton = styled(Button)<BuyButtonProps>`
  color: ${({ buttonTextColor }) => buttonTextColor};
  background-color: ${({ buttonBgColor }) => buttonBgColor};
  border: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  box-sizing: border-box;
  overflow: hidden;
  padding: 0.85em 2em;
  font-size: ${({ theme }) => theme.font.sizes.small};
  min-width: 80%;
  margin: 1.5em 0 0;

  &:hover {
    border: none;
    color: ${({ buttonTextColor }) => buttonTextColor};
    background-color: ${({ buttonBgColor }) => darken(0.1, buttonBgColor)};
  }
`;

type PreviewFooterProps = {
  color?: string;
};

export const PreviewFooter = styled.div<PreviewFooterProps>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 1.3rem;
`;

export const FooterLink = styled.a`
  margin-bottom: 0.6em;
  line-height: inherit;
  color: inherit;
`;

export const PreviewFooterLink = styled(FooterLink)`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  vertical-align: baseline;
  background: transparent;
  color: ${({ theme }) => theme.palette.text.main};
`;

export const RestrictedAssetIcon = styled(MdDoNotDisturbAlt)<{ size?: string }>`
  top: 25%;
  width: ${({ size }) => size || '8rem'};
  height: ${({ size }) => size || '8rem'};
  margin-bottom: 1rem;
`;
interface RestrictedAssetContainerProps {
  fontSize?: string;
  height?: string;
}
export const RestrictedAssetContainer = styled.div<RestrictedAssetContainerProps>`
  z-index: 100;
  position: absolute;
  color: white;
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: bold;
  text-align: center;
  width: 100%;
  top: ${({ height }) => height || '50%'};
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRestrictedAssetContainer = styled(RestrictedAssetContainer)`
  height: 100%;
  backdrop-filter: brightness(0.3);
  justify-content: center;
`;
