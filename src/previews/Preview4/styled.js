import styled from 'styled-components';
import { transparentize } from 'polished';

// utils
import colors from 'config/colors';
import { fontWeights, fontSizes } from 'utils';

// Components
import {
  PreviewBox,
  ImageHolder,
  BuyButton,
  TextWrapper,
  IconWrapper,
  PreviewImage,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? 'auto'};
  overflow: hidden;
  border-top: 4px solid ${({ topBorderColor }) => topBorderColor};
  display: flex;
  flex-direction: column-reverse;
  border-radius: 3px 3px 0 0;
`;

export const StyledButton = styled(BuyButton)`
  margin: 0;
  padding: 10px 60px;
  height: 3rem;
`;

export const ImageWrapper = styled(ImageHolder)`
  height: 100%;
  min-height: 310px;
  margin: 0;
`;

export const StyledIconWrapper = styled(IconWrapper)`
  width: 45px;
  height: 68px;
  border: 1px solid ${transparentize(0.6, colors.black)};
  transform: rotate(45deg);
  top: -27px;
  left: -16px;
  z-index: 1;
`;

export const Icon = styled.div`
  color: ${colors.white};
  position: absolute;
  top: 25px;
  left: 23px;
  transform: rotate(-45deg);
`;

export const StyledPreviewImage = styled(PreviewImage)`
  position: absolute;
`;

export const StyledTextWrapper = styled(TextWrapper)`
  align-items: self-end;
  margin: 10% 5%;
`;

export const TextElement = styled.div`
  overflow-wrap: break-word;
  font-weight: ${fontWeights('normal')};
  font-size: ${fontSizes('medium')};
  line-height: 1.3em;
  margin: 0;
  max-width: ${({ width }) => (width < 45 ? '80%' : '55%')};
  z-index: 1;
`;
