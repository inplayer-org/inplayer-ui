import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import { FaLock } from 'react-icons/fa';
import colors from '../../theme/colors';

export const InPlayerPreviewBox = styled.div`
  background: ${({ theme }) => theme.palette.background.main};
  color: ${({ theme }) => theme.palette.text.main};
  width: 100%;
  max-width: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #e9edef;
  clear: both;
  background-size: 100% 4px;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  font-weight: 300;

  @media screen and (max-height: 600px) {
    max-width: 580px;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  background: #def;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  display: block;
  position: relative;
`;

interface PaywallExplainProps {
  hasProtectedByLabel: boolean;
}

export const PaywallExplain = styled.div<PaywallExplainProps>`
  background: rgba(58, 71, 76, 0.6);
  box-sizing: border-box;
  padding: 2vh 3%;
  color: ${colors.white};
  display: ${ifProp('hasProtectedByLabel', 'flex', 'none')};
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  text-align: left;
  ${ifProp(
    'hasProtectedByLabel',
    css`
      align-items: center;
    `
  )}
`;

export const InplayerWhiteLogo = styled.div`
  position: absolute;
  right: 3%;
  display: block;
  padding: 0;
  line-height: 15px;

  strong {
    vertical-align: middle;
    font-size: 12px;
    text-transform: uppercase;
    display: inline-block;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    max-width: 150px;
    text-align: right;
    line-height: 15px;

    @media screen and (max-width: 600px) {
      max-width: 80px;
    }
  }

  a {
    background: url('https://assets.inplayer.com/images/inplayer_icon-fs.svg') no-repeat center
      center;
    height: 30px;
    width: 30px;
    background-size: 30px;
    display: inline-block;
    text-indent: -9999vw;
    vertical-align: middle;
    margin-left: 7px;
    margin-bottom: 2px;
    line-height: 15px;
  }
`;

export const InplayerPremiumLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemDetails = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 59%;
  padding: 18px 0 18px 3%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    margin: 20px 0;
    color: rgba(0, 0, 0, 0.7);
    color: ${({ theme }) => theme.palette.text.main};
    text-align: center;
    font-weight: 300;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const BuyButtonWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: right;
  width: 30%;
  padding: 18px 0 18px 3%;

  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

interface ButtonProps {
  buttonBgColor: string;
  buttonTextColor: string;
}

export const BuyButton = styled.button<ButtonProps>`
  vertical-align: middle;
  border-radius: 2px;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  padding: 13px 25px;
  background: ${({ buttonBgColor }) => transparentize(0.2, buttonBgColor)};
  text-transform: uppercase;
  color: ${({ buttonTextColor }) => buttonTextColor};
  font-weight: bold;
  border: none;
  font-size: 16px;
  cursor: pointer;
  min-width: 80%;
  margin-bottom: 30px;
  margin-top: 14px;
  transition: background ease 500ms;
  width: 100%;
  letter-spacing: 0.04em;
  transform: translateY(0);

  &:hover,
  &:focus {
    outline: none;
    transform: translateY(-2px);
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const InplayerFooter = styled.div`
  border-top: 1px solid #e9edef;
  margin-top: 10px;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 14px;
    line-height: 18px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
`;

export const LockIcon = styled(FaLock)`
  margin: 0px 0.4em 0px 0px;
  position: relative;
  vertical-align: middle;
`;
