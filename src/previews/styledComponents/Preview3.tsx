import styled from 'styled-components';
import { Colors, InPlayerIcon } from '@inplayer-org/inplayer-ui';
import { transparentize } from 'polished';
import { ifProp } from 'styled-tools';

// Components
import {
    PreviewFooter,
    PreviewBox,
    ExplainSpan,
    ImageHolder,
    TextWrapper,
} from './SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? '350px'};
  border-top: 3px solid ${({ color }) => color};
  background: ${Colors.white};
  display: inline-block;
  vertical-align: top;
  padding: 1% 3% 2% 3%;
  box-sizing: border-box;
  color: ${Colors.fontDarkGray};
  border-radius: 3px 3px 0 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ImageProps {
    backgroundImage: string;
}

export const StyledImageHolder = styled(ImageHolder)<ImageProps>`
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: linear-gradient(
      45deg,
      ${transparentize(0.2, Colors.black)} 0%,
      ${transparentize(0.5, Colors.black)} 100%
    ),
    url(${({ backgroundImage }) => backgroundImage});
`;

export const PaywallExplainSpan = styled(ExplainSpan)`
  padding-bottom: 20px;
`;

interface ShowInPreviewProps {
  showInPreview?: boolean;
}

export const StyledTextWrapper = styled(TextWrapper)<ShowInPreviewProps>`
  position: relative;
  justify-content: flex-end;
  height: ${ifProp('showInPreview', '350px', '700px')};
  width: 50%;
  height: 100%;
  padding: 0 2%;
`;

export const Header = styled(PreviewFooter)`
  border-bottom: 1px solid ${transparentize(0.6, Colors.darkGray)};
  margin: 3%;
  text-align: right;
  padding-bottom: 1%;
`;


  
interface TextColorProps {
    color: string;
}

export const StyledIcon = styled(InPlayerIcon)<TextColorProps>`
  font-size: ${({ theme }) => theme.font.sizes.extraLarge};
  color: ${({ color }) => color};

  :hover {
    outline: none;
    font-size: 60px;
    margin: -5px;
  }
`;

export const TitleBorder = styled.div<TextColorProps>`
  margin-bottom: 2%;
  width: 300px;
  background: linear-gradient(${({ color }) => `${color},${color}`}) bottom left no-repeat;
  background-size: 35% 4px;
`;