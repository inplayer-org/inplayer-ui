import { Colors, Theme, InPlayerIcon, Typography } from '@inplayer-org/inplayer-ui';
import { transparentize, darken } from 'polished';
import styled, { StyledComponent } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const PaywallContainer = styled.div`
  width: 100%;
  max-width: 375px;
  margin: auto;
  background: ${Colors.pale};
  box-shadow: 0 1px 8px 0 ${Colors.darkGray};
  border-radius: 2px;
  overflow: hidden;
  transition: all 250ms ease-out;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weights.light};
  line-height: 20px;
`;

export const SectionContainer = styled.section`
  background: ${Colors.white};
  border-top: 1px solid ${Colors.gray};
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

interface StyledInputProps {
  borderColor?: string;
  first?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ borderColor }) => ifProp('borderColor', borderColor, Colors.gray)};
  margin: 0 auto 10px;
  margin-right: ${ifProp('first', '1px', 'auto')};
  line-height: 20px;
  font-weight: ${({ theme }) => theme.font.weights.light};
  width: 100%;
  color: ${Colors.black};
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

interface ButtonProps {
  borderTextColor?: string;
}

export const Button: StyledComponent<'button', Theme, ButtonProps> = styled.button`
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid ${({ borderTextColor }: ButtonProps) => ifProp('borderTextColor', borderTextColor, Colors.skyBlue)};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  text-align: center;
  color: ${({ borderTextColor }: ButtonProps) => ifProp('borderTextColor', borderTextColor, Colors.skyBlue)};
  background: ${Colors.white};
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
  color: ${transparentize(0.45, Colors.fontDarkGray)};
  text-align: left;
`;

export const ForgotLabel = styled.label`
  display: inline-block;
  cursor: default;
  width: auto;
`;

interface IconProps {
  color?: string;
}

export const StyledInPlayerIcon = styled(InPlayerIcon)`
  position: absolute;
  top: 15px;
  left: 0;
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ color }: IconProps) => ifProp('color', color, Colors.gray)};
`;

export const InputContainer = styled.div`
  position: relative;
`;

interface PreviewFooterProps {
  color: string;
}

export const PreviewFooter: any = styled.div`
  color: ${({ color }: PreviewFooterProps) => color};
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 1.3rem;
`;

interface PreviewBoxProps {
  topBorder?: boolean;
  circleImage?: boolean;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

export const PreviewBox: any = styled.div<PreviewBoxProps>`
  width: ${({ width }) => width ?? '500px'};
  height: ${({ height }) => height ?? '580px'};
  max-width: ${({ width }) => (width ? '' : '520px')};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  margin: auto;
  border: 1px solid ${Colors.gray};
  clear: both;
  padding: ${ifProp('circleImage', '26px', '18px')} 3%;
  background: ${ifProp(
    'topBorder',
    `${Colors.white} url(http://inplayer-paywall-v2.s3.amazonaws.com/images/ip-graphic-border.jpg) top no-repeat`,
    `${Colors.white}`
  )};
  background-size: 100% 4px;
  position: relative;
  position: relative;
  transition: all ease 200ms;
  box-sizing: border-box;
`;

interface PreviewImageProps {
  imageWidth?: string;
  imageBorderRadius?: boolean;
}

export const PreviewImage = styled.img<PreviewImageProps>`
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
  color: ${Colors.white};
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
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
  background: ${Colors.mint};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

interface TemplatesButtonProps {
  buttonBgColor: string;
  buttonTextColor: string;
}

export const TemplatesButton: any = styled.div<TemplatesButtonProps>`
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
interface IconWrapperProps {
  protectedLabel?: boolean;
  backgroundColor: string;
}

export const IconWrapper: any = styled.div<IconWrapperProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  display: ${ifProp('protectedLabel', 'block', 'none')};
  position: absolute;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface PaywallExplainProps {
  color: string;
}

export const PaywallExplain: any = styled.div<PaywallExplainProps>`
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
