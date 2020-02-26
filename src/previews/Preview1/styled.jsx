// @flow
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import colors from 'config/colors';
import Grid from 'blocks/Grid';
import InPlayerIcon from 'elements/InPlayerIcon';
import { fontSizes, fontWeights } from 'utils';

// Components
import {
  PreviewFooter,
  PreviewBox,
  PaywallExplain,
  ExplainSpan,
} from '../components/SharedComponents';

const { Cell } = Grid;

export const StyledCell = styled(Cell)`
  flex-flow: column;
  width: fit-content;
`;

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? '450px'};
  border-radius: 8px 8px 3px 3px;
`;

export const StyledPaywallExplain = styled(PaywallExplain)`
  background: ${transparentize(0.6, colors.black)};
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
  font-size: ${fontSizes('large')};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: ${colors.fontLightGray};
  font-weight: normal;
  text-align: right;
`;

export const PaywallExplainSpan = styled(ExplainSpan)`
  font-size: ${fontSizes('extraSmall')};
  width: 100%;
`;

export const Title = styled.h3`
  overflow-wrap: break-word;
  font-weight: ${fontWeights('normal')};
  font-size: ${fontSizes('medium')};
  line-height: 1.3em;
  color: ${colors.black};
  margin: 0;
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
  border-top: 1px solid ${transparentize(0.9, colors.black)};
  margin-top: 10px;
  text-align: center;
  padding-top: 5px;
`;

export const PremiumContent = styled.div`
  display: flex;
`;
