// @flow
import colors from 'config/colors';
import { transparentize, darken } from 'polished';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { InPlayerIcon, Typography } from 'elements';

export const PaywallContainer = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  background: ${colors.pale};
  box-shadow: 0 1px 8px 0 ${colors.darkGray};
  border-radius: 2px;
  overflow: hidden;
  transition: all 250ms ease-out;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weights.light};
  line-height: 20px;
`;

export const SectionContainer = styled.section`
  background: ${colors.white};
  border-top: 1px solid ${colors.gray};
  padding: 2vh 0;
  position: relative;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 60%;
  max-width: 225px;
  min-width: 190px;
  margin: 8px auto;
`;

export const StyledInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ borderColor }) => ifProp('borderColor', borderColor, colors.gray)};
  margin: 0 auto 10px;
  margin-right: ${ifProp('first', '1px', 'auto')};
  line-height: 20px;
  font-weight: ${({ theme }) => theme.font.weights.light};
  width: 100%;
  color: ${colors.black};
  letter-spacing: 0.04em;
  transition: all 0.3s ease;
  background: transparent;
  font-size: ${({ theme }) => theme.font.sizes.small};
  padding: 15px 16px 4px 20px;
`;

export const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid
    ${({ borderTextColor }) => ifProp('borderTextColor', borderTextColor, colors.skyBlue)};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  text-align: center;
  color: ${({ borderTextColor }) => ifProp('borderTextColor', borderTextColor, colors.skyBlue)};
  background: ${colors.white};
  box-sizing: border-box;
  padding: 8px 0;
  cursor: default;
  margin: 10px 0;
  width: 100%;
  transition: all 0.35s ease;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  align-items: flex-start;
`;

export const PasswordResetContainer = styled.div`
  height: auto;
  overflow: hidden;
  transition: all 0.25s ease;
  max-height: 50px;
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  color: ${transparentize(0.45, colors.fontDarkGray)};
  text-align: left;
`;

export const ForgotLabel = styled.label`
  display: inline-block;
  cursor: default;
  width: auto;
`;

export const StyledInPlayerIcon = styled(InPlayerIcon)`
  position: absolute;
  top: 15px;
  left: 0;
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ color }) => ifProp('color', color, colors.gray)};
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const PreviewFooter = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 1.3rem;
`;

export const PreviewBox = styled.div`
  width: ${({ width }) => width ?? '500px'};
  height: ${({ height }) => height ?? '580px'};
  max-width: ${({ width }) => (width ? '' : '520px')};
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
  text-align: center;
  word-break: break-all;
  height: 3rem;
  overflow: hidden;
  transition: background ease 500ms;

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

export const PaywallExplain = styled.div`
  color: ${({ color }) => color};
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const FooterLink = styled.a`
  margin-bottom: 0.6em;
  line-height: inherit;
  color: inherit;
`;

export const ExplainSpan = styled.span`
  vertical-align: middle;
  display: inline-block;
  text-align: left;
  margin: 0;
  position: relative;
  line-height: 15px;
`;
