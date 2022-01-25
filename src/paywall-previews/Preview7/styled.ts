import styled from 'styled-components';

// utils
import colors from '../../theme/colors';

// Components
import { Typography } from '../../components';
import {
  PreviewFooter,
  PreviewBox,
  ImageHolder,
  BuyButton,
  IconWrapper,
  PreviewImageProps,
  RestrictedAssetContainer,
} from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '500px')};
  padding: 26px 3%;
  border-radius: 8px 8px 3px 3px;
  display: flex;
  flex-direction: column;
`;

export const StyledImageWrapper = styled(ImageHolder)`
  height: 250px;
  max-height: 250px;
  width: 250px;
  margin: auto;
  background: ${({ theme }) => theme.palette.background.main};
`;

export const StyledIconWrapper = styled(IconWrapper)`
  padding: 12px;
  color: ${colors.white};
  border-radius: 50%;
  overflow: hidden;
  top: 76%;
  left: calc(80% - 10px);
  line-height: 3%;
`;

export const ItemDetails = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const PreviewHeader = styled(Typography)`
  font-size: ${({ theme }) => theme.font.sizes.h4};
  line-height: 1.4em;
  margin: 0;
`;

export const ItemContent = styled(Typography)`
  margin: 0;
  line-height: 1.5;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weights.light};
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 15%;
`;

export const StyledBuyButton = styled(BuyButton)`
  margin: 1.5em auto 1.8em;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const StyledPreviewFooter = styled(PreviewFooter)`
  border-top: 1px solid ${colors.gray};
  margin-top: 10px;
  text-align: center;
  padding-top: 5px;
  height: 5%;
`;

export const RestrictedAssetText = styled.p`
  z-index: 100;
  position: absolute;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledRestrictedAssetContainer = styled(RestrictedAssetContainer)<PreviewImageProps>`
  height: 100%;
  border-radius: 50%;
  backdrop-filter: brightness(0.3);
  justify-content: center;
`;
