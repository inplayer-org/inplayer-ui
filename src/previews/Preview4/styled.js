import styled from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';

// Components
import {
  PreviewBox,
  ImageHolder,
  TemplatesButton,
  TextWrapper,
  IconWrapper,
  PreviewImage,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? 'auto'};
  background: ${colors.white};
  overflow: hidden;
  border-top: 4px solid
    ${({ topBorderColor }) => ifProp('topBorderColor', `${topBorderColor}`, `${colors.white}`)};
  display: flex;
  flex-direction: column-reverse;
  border-radius: 3px 3px 0 0;
`;

export const TextElement = styled.div`
  overflow-wrap: break-word;
  font-weight: ${({ theme }) => theme.font.weights.normal};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.3em;
  margin: 0;
  max-width: ${({ width }) => (width < 45 ? '80%' : '55%')};
  z-index: 1;
`;

export const Button = styled(TemplatesButton)`
  padding: 18px 26px;
  height: 1rem;
`;

export const StyledTextWrapper = styled(TextWrapper)`
  align-items: self-end;
  margin: 10% 5%;
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

export const ImageWrapper = styled(ImageHolder)`
  height: 100%;
  min-height: 310px;
  margin: 0;
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
