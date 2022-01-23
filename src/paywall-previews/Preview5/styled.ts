import styled from 'styled-components';
import { GiCutDiamond } from 'react-icons/gi';
import { transparentize } from 'polished';

// utils
import colors from '../../theme/colors';

// Components
import { PreviewBox, DescriptionSpan, ImageHolder, BuyButton } from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)<any>`
  max-width: ${({ width }) => (width ? '' : '90vh')};
  padding: 0;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.6em;
  font-weight: ${({ theme }) => theme.font.weights.light};
  display: flex;
  flex-direction: column;
`;

type ImageWrapperProps = {
  height: any;
  backgroundImage: any;
};

export const ImageWrapper = styled(ImageHolder)<ImageWrapperProps>`
  height: ${({ height }) => (height < 75 ? '45%' : '65%')};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  margin: 0;
`;

export const Overlay = styled.div`
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 50%,
    ${transparentize(0.7, colors.black)} 100%
  );
  padding: 28.5% 50%;
  height: 100%;
`;

export const BuyButtonHolder = styled.div`
  text-align: center;
  position: absolute;
  display: block;
  width: 100%;
  top: calc(50% - 25px);
`;

export const BuyButtonBorder = styled.div`
  margin: -8px;
  display: inline-block;
  border: 8px solid ${transparentize(0.9, colors.black)};
  border-radius: 300px;
  overflow: hidden;
`;

export const StyledBuyButton = styled(BuyButton)`
  background-color: ${({ buttonBgColor }) => transparentize(0.2, buttonBgColor)};
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin: 0;
  padding: 10px 60px;

  @media screen and (max-width: 1100px) {
    padding: 10px 35px;
  }
`;

export const ItemDetails = styled.div<{ height?: any }>`
  background: ${({ theme }) => theme.palette.background.main};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: ${({ height }) => (height < 75 ? '55%' : '35%')};
  padding: 1rem 3%;
  box-sizing: border-box;
  position: relative;
`;

export const StyledIcon = styled(GiCutDiamond)`
  line-height: 15px;
  font-size: ${({ theme }) => theme.font.sizes.large};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 0 0.4em 0 0;
  position: relative;
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding: 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-transform: uppercase;
`;

export const TitleHolder = styled.div`
  display: inline-block;
  margin: 0.3em 0;
`;

export const DescriptionHolder = styled.div`
  margin-bottom: 0.6em;
`;
export const RestrictedAssetText = styled.p`
  z-index: 100;
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  bottom: 25%;
`;
