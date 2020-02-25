import styled, { StyledComponent } from 'styled-components';
import { Colors, Theme } from '@inplayer-org/inplayer-ui';

// Components
import {
    PreviewFooter,
    PreviewBox,
    ImageHolder,
    TemplatesButton,
    IconWrapper,
} from './SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  border-radius: 8px 8px 3px 3px;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled(ImageHolder)`
  height: 50%;
  width: 250px;
  margin: auto;
`;

export const PreviewHeader: StyledComponent<'h4', Theme> = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.h4};
  line-height: 1.4em;
  margin: 0;
`;

export const ItemDetails = styled.div`
  width: 100%;
  height: 30%;
`;

export const ItemContent = styled.p`
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

export const BuyButton = styled(TemplatesButton)`
  vertical-align: middle;
  box-sizing: border-box;
  outline: none;
  padding: 0.85em 2em;
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  min-width: 80%;
  width: 80%;
  margin: auto;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  padding: 12px;
  color: ${Colors.white};
  border-radius: 50%;
  overflow: hidden;
  top: 76%;
  left: calc(80% - 10px);
  line-height: 3%;
`;

export const StyledImageWrapper = styled(ImageWrapper)`
  background: ${Colors.white};
`;

export const StyledPreviewFooter = styled(PreviewFooter)`
  border-top: 1px solid ${Colors.gray};
  margin-top: 10px;
  text-align: center;
  padding-top: 5px;
  height: 5%;
`;