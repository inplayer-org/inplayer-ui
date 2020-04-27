import styled from 'styled-components';

// utils
import colors from 'theme/colors';

// Components
import { Typography } from 'elements';
import {
  PreviewFooter,
  PreviewBox,
  ImageHolder,
  BuyButton,
  IconWrapper,
  PreviewImage,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  border-radius: 8px 8px 3px 3px;
  height: ${({ height }) => height ?? 'auto'};
  display: flex;
  flex-direction: column;
`;

export const StyledImageWrapper = styled(ImageHolder)`
  height: 250px;
  max-height: 250px;
  width: 250px;
  margin: auto;
  background: ${colors.white};
`;

export const StyledPreviewImage = styled(PreviewImage)<any>`
  height: 250px;
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
  font-size: ${fontSizes('h4')};
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
