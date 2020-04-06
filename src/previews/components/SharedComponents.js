// @flow
import colors from 'config/colors';
import { darken } from 'polished';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { Typography } from 'elements';
import { fontWeights, fontSizes } from 'utils/index';

export const PreviewFooter = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 1.3rem;
`;

export const PreviewBox = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '580px'};
  max-width: ${({ width }) => (width ? '' : '100%')};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  margin: auto;
  border: 1px solid ${colors.gray};
  clear: both;
  padding: ${ifProp('circleImage', '26px', '18px')} 3%;
  background: ${ifProp(
    'topBorder',
    `${colors.white} url(http://inplayer-paywall-v2.s3.amazonaws.com/images/ip-graphic-border.jpg) top no-repeat`,
    `${colors.white}`
  )};
  background-size: 100% 4px;
  position: relative;
  transition: all ease 200ms;
  box-sizing: border-box;
`;

export const PreviewImage = styled.img`
  width: ${prop('imageWidth', '100%')};
  border-radius: ${ifProp('imageBorderRadius', '50%')};
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
  background: rgba(0, 0, 0, 0.5);
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

export const TemplatesButton = styled.div`
  color: ${({ buttonTextColor }) => buttonTextColor};
  background-color: ${({ buttonBgColor }) => buttonBgColor};
  border: ${({ buttonBgColor }) => `1px solid ${buttonBgColor}`};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  border-radius: 2px;
  word-break: break-all;
  height: 3rem;
  overflow: hidden;
  transition: background ease 500ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    outline: none;
    background: ${({ buttonBgColor }) => darken(0.1, buttonBgColor)};
  }
`;

export const IconWrapper = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  display: ${ifProp('protectedLabel', 'block', 'none')};
  position: absolute;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaywallDescription = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const FooterLink = styled.a`
  margin-bottom: 0.6em;
  line-height: inherit;
  color: inherit;
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

export const BuyButton = styled.button`
  color: ${({ buttonTextColor }) => buttonTextColor};
  background-color: ${({ buttonBgColor }) => buttonBgColor};
  border: none;
  text-transform: uppercase;
  font-weight: ${fontWeights('bold')};
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  padding: 0.85em 2em;
  font-size: ${fontSizes('small')};
  cursor: pointer;
  min-width: 80%;
  margin: 1.5em 0 0;
  transition: background ease 500ms;

  &:hover {
    outline: none;
    background: ${({ buttonBgColor }) => darken(0.1, buttonBgColor)};
  }
`;

export const StyledPaywallDescription = styled(PaywallDescription)`
  display: ${({ displayProtectedLabel }) => (displayProtectedLabel ? 'block' : 'none')};
`;
