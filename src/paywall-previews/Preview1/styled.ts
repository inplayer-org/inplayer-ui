import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import colors from 'theme/colors';
import { FaLock } from 'react-icons/fa';

interface PreviewBoxProps {
  hasPreviewTopBorder: boolean;
}

export const InplayerPreviewBox = styled.div<PreviewBoxProps>`
  width: 100%;
  max-width: 100vh;
  background: ${ifProp(
    'hasPreviewTopBorder',
    `url('https://assets.inplayer.com/images/paywall/ip-graphic-border.jpg') top no-repeat ${colors.white}`,
    `${colors.white}`
  )};
  margin: 24px auto;
  box-sizing: border-box;
  border: 1px solid #e9edef;
  clear: both;
  background-size: 100% 4px;
  position: relative;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  overflow: hidden;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  text-align: left;
  font-weight: 300;
  font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: ${ifProp('hasPreviewTopBorder', '18px 3% 0 3%', '0')};
  box-shadow: 0 0 33px 9px rgba(0, 0, 0, 0.21);

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

export const PaywallExplain = styled.div<{ hasProtectedByLabel: boolean }>`
  background: rgba(58, 71, 76, 0.6);
  box-sizing: border-box;
  padding: 2vh 3%;
  color: ${colors.white};
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  text-align: left;

  span {
    vertical-align: middle;
    max-width: calc(100% - 150px);
    display: inline-block;
    text-align: left;
    margin: 0;
    position: relative;
    font-size: 13px;
    padding: 0;
    line-height: 15px;
  }
`;

export const InplayerWhiteLogo = styled.div`
  position: absolute;
  right: 3%;
  vertical-align: middle;
  display: block;
  margin: -4px 0 0;
  padding: 0;
  line-height: 15px;

  strong {
    vertical-align: middle;
    font-size: 12px;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    display: inline-block;
    color: rgba(255, 255, 255, 0.8);
    font-weight: normal;
    max-width: 150px;
    text-align: right;
    line-height: 15px;

    @media screen and (max-width: 600px) {
      max-width: 73px;
    }
  }

  a {
    background: url('https://assets.inplayer.com/images/paywall/ip-logicon.svg') no-repeat center
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

  @media screen and (max-width: 476px) {
    margin: 0px 0 0 0;
  }
`;

export const ItemDetails = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 69%;
  padding: 0 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    margin: 20px 0;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font-weight: 300;
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
  font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
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
    color: #aaa;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const LockIcon = styled(FaLock)`
  margin: 0 0.4em 0 0;
`;
