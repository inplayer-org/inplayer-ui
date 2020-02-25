import styled from 'styled-components';
import { Colors, Grid, InPlayerIcon } from '@inplayer-org/inplayer-ui';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';

// Components
import {
    PreviewFooter,
    PreviewBox,
    PaywallExplain,
    ExplainSpan,
} from './SharedComponents';

const { Cell } = Grid;

export const StyledCell = styled(Cell)`
  flex-flow: column;
  width: fit-content;
`;

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? '450px'};
  border-radius: 8px 8px 3px 3px;
`;

interface PaywallExplainProps {
  displayProtectedLabel?: boolean;
}

export const StyledPaywallExplain = styled(PaywallExplain)<PaywallExplainProps>`
  background: ${transparentize(0.6, Colors.black)};
  box-sizing: border-box;
  padding: 3% 3%;
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 15px;
  display: ${ifProp('displayProtectedLabel', 'flex', 'none')};
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
`;

export const Protected = styled.strong`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: ${Colors.fontLightGray};
  font-weight: normal;
  text-align: right;
`;

export const PaywallExplainSpan = styled(ExplainSpan)`
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  width: 100%;
`;

export const Title = styled.h1`
  overflow-wrap: break-word;
  font-weight: bold;
  line-height: 1.3em;
  color: yellow;
  margin: 0px;
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

export const LockIcon = styled(InPlayerIcon)`
  margin: 0 0.4em 0 0;
`;

export const StyledPreviewFooter = styled(PreviewFooter)`
  border-top: 1px solid ${transparentize(0.9, Colors.black)};
  margin-top: 10px;
  text-align: center;
  padding-top: 5px;
`;

export const PremiumContent = styled.div`
  display: flex;
`;
