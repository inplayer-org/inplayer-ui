// @flow
import styled from 'styled-components';
import { transparentize } from 'polished';
import { FaLock } from 'react-icons/fa';

// utils
import colors from 'theme/colors';
import { fontSizes, fontWeights } from 'utils';

// Components
import { Typography } from 'elements';
import {
  PreviewFooter,
  PreviewBox,
  PaywallDescription,
  DescriptionSpan,
  BuyButton,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)<any>`
  height: ${({ height }) => height ?? 'auto'};
  border-radius: 8px 8px 3px 3px;
`;

export const StyledPaywallDescription = styled(PaywallDescription)<{
  displayProtectedLabel: boolean;
}>`
  background: ${transparentize(0.6, colors.black)};
  box-sizing: border-box;
  padding: 3% 3%;
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 15px;
  display: ${({ displayProtectedLabel }) => (displayProtectedLabel ? 'flex' : 'none')};
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
`;

export const PremiumContent = styled.div`
  display: flex;
  align-items: center;
`;

export const LockIcon = styled(FaLock)`
  margin: 0 0.4em 0 0;
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  font-size: ${fontSizes('extraSmall')};
  width: 100%;
`;

export const Protected = styled.strong`
  font-size: ${fontSizes('small')};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: ${colors.fontLightGray};
  font-weight: normal;
  text-align: right;
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
  background-size: 30px;
  display: inline-block;
  text-indent: -9999vw;
  vertical-align: middle;
  margin-left: 7px;
  line-height: 15px;
`;

export const ItemDetails = styled.div`
  width: 69%;
  display: inline-block;
  vertical-align: middle;
  height: 30%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Title = styled(Typography)`
  overflow-wrap: break-word;
  font-weight: ${fontWeights('normal')};
  font-size: ${fontSizes('medium')};
  line-height: 1.3em;
  color: ${colors.black};
  margin: 0;
`;

export const BuyButtonWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0.6em;
  line-height: inherit;
  text-align: right;
  width: 30%;

  @media screen and (max-width: 1100px) {
    text-align: center;
    width: 100%;
  }
`;

export const StyledBuyButton = styled(BuyButton)<any>`
  margin-bottom: 1.8em;
  padding: 0.85em 4em;
  float: right;
`;

export const StyledPreviewFooter = styled(PreviewFooter)`
  border-top: 1px solid ${transparentize(0.9, colors.black)};
  margin-top: 10px;
  text-align: center;
  padding-top: 5px;
`;