// @flow
import { darken, transparentize } from 'polished';
import styled from 'styled-components';
import { prop } from 'styled-tools';

// utils
import colors from 'config/colors';
import { fontWeights, fontSizes } from 'utils';

// components
import { Typography, Button } from 'elements';

export const PreviewBox = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '580px'};
  max-width: ${({ width }) => (width ? '' : '100%')};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  margin: auto;
  border: 1px solid ${colors.gray};
  clear: both;
  padding: ${({ circleImage }) => (circleImage ? '26px' : '18px')} 3%;
  background: ${({ topBorder }) =>
    topBorder
      ? `${colors.white} url(http://inplayer-paywall-v2.s3.amazonaws.com/images/ip-graphic-border.jpg) top no-repeat`
      : `${colors.white}`};
  background-size: 100% 4px;
  position: relative;
  transition: all ease 200ms;
  box-sizing: border-box;
`;

export const PreviewImage = styled.img`
  width: ${prop('imageWidth', '100%')};
  border-radius: ${({ imageBorderRadius }) => imageBorderRadius && '50%'};
  object-fit: cover;
  object-position: 50% 50%;
  vertical-align: middle;
  border: 0;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
`;

export const OverlayLabel = styled(Typography)`
  color: ${colors.white};
  font-weight: ${fontWeights('semiBold')};
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
`;

export const PaywallDescription = styled.div`
  color: ${({ color }) => color};
  font-size: ${fontSizes('small')};
`;

export const StyledPaywallDescription = styled(PaywallDescription)`
  display: ${({ displayProtectedLabel }) => (displayProtectedLabel ? 'block' : 'none')};
`;

export const IconWrapper = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  display: ${({ protectedLabel }) => (protectedLabel ? 'block' : 'none')};
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

export const BuyButton = styled(Button)`
  color: ${({ buttonTextColor }) => buttonTextColor};
  background-color: ${({ buttonBgColor }) => buttonBgColor};
  border: none;
  text-transform: uppercase;
  font-weight: ${fontWeights('bold')};
  box-sizing: border-box;
  overflow: hidden;
  padding: 0.85em 2em;
  font-size: ${fontSizes('small')};
  min-width: 80%;
  margin: 1.5em 0 0;

  &:hover {
    border: none;
    color: ${({ buttonTextColor }) => buttonTextColor};
    background-color: ${({ buttonBgColor }) => darken(0.1, buttonBgColor)};
  }
`;

export const PreviewFooter = styled.div`
  color: ${({ color }) => color};
  font-size: ${fontSizes('small')};
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
  font-size: ${fontSizes('extraSmall')};
  vertical-align: baseline;
  background: transparent;
  color: ${colors.fontGray};
`;
