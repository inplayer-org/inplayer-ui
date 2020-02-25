import styled from 'styled-components';
import { Colors } from '@inplayer-org/inplayer-ui';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';

// Components
import {
    PreviewBox,
    ImageHolder,
    TemplatesButton,
    TextWrapper,
    IconWrapper,
} from './SharedComponents';

interface FullPreviewProps {
    isFullPreview?: boolean;
}
  
interface PreviewBoxProps extends FullPreviewProps {
    topBorderColor?: string;
    width?: string;
    height?: string;
}
  
export const StyledPreviewBox = styled(PreviewBox)<PreviewBoxProps>`
    height: ${({ height }) => height ?? '360px'};
    background: ${Colors.white};
    overflow: hidden;
    border-top: 4px solid ${({ topBorderColor }) => ifProp('topBorderColor', `${topBorderColor}`, `${Colors.white}`)};
    display: flex;
    flex-direction: column-reverse;
    border-radius: 3px 3px 0 0;
`;

export const ImageWrapper = styled(ImageHolder)`
    height: 100%;
    margin: 0;
`;

export const TextElement = styled.div<{ width: number }>`
    overflow-wrap: break-word;
    font-weight: ${({ theme }) => theme.font.weights.normal};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    line-height: 1.3em;
    margin: 0;
    max-width: ${({ width }) => (width < 45 ? '80%' : '55%')};
`;

export const Button = styled(TemplatesButton)`
    padding: 18px 26px;
    height: 1rem;
`;

export const StyledTextWrapper = styled(TextWrapper)<FullPreviewProps>`
    align-items: self-end;
    margin: ${ifProp('isFullPreview', '10% 5%', '5%')};
`;

export const StyledIconWrapper = styled(IconWrapper)`
    width: 20px;
    height: 20px;
    padding: 34px;
    margin: -55px;
    border: 1px solid ${transparentize(0.6, Colors.black)};
    transform: rotate(45deg);
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Icon = styled.div`
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    color: ${Colors.white};
    padding: 1px 32px 25px 45px;
    margin: 0;
    position: relative;
    transform: rotate(-45deg);
`;