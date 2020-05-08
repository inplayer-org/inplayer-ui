import styled from 'styled-components';
import { transparentize } from 'polished';
import { FaLock } from 'react-icons/fa';

// utils
import colors from 'theme/colors';

// Components
import Typography from 'components/Typography';
import {
  PreviewFooter,
  PreviewBox,
  ImageHolder,
  PaywallDescription,
  DescriptionSpan,
  BuyButton,
} from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '70vh')};
  border-radius: 8px 8px 3px 3px;
`;

export const StyledImageHolder = styled(ImageHolder)`
  height: 320px;
  min-height: 220px;
`;

interface StyledPaywallDescriptionProps {
  hasProtectedByLabel: boolean;
}

export const StyledPaywallDescription = styled(PaywallDescription)<StyledPaywallDescriptionProps>`
  background: ${transparentize(0.6, colors.black)};
  box-sizing: border-box;
  padding: 3% 3%;
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 15px;
  display: ${({ hasProtectedByLabel }) => (hasProtectedByLabel ? 'flex' : 'none')};
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
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  width: 100%;
`;

export const Protected = styled.strong`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.disabled};
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
  flex-basis: 70%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Title = styled(Typography)`
  overflow-wrap: break-word;
  font-weight: ${({ theme }) => theme.font.weights.normal};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.3em;
  color: ${colors.black};
  margin: 0;
`;

export const BuyButtonWrapper = styled.div`
  flex-basis: 30%;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const StyledBuyButton = styled(BuyButton)`
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
