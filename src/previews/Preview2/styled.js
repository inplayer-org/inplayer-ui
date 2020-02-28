// @flow
import styled from 'styled-components';
import { transparentize } from 'polished';
import colors from 'config/colors';
import { fontSizes } from 'utils';
import InPlayerIcon from 'elements/InPlayerIcon';

// Components
import {
  PreviewBox,
  ImageHolder,
  TemplatesButton,
  PreviewFooter,
  DescriptionSpan,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  font-size: ${fontSizes('large')};
  height: ${({ height }) => height ?? '400px'};
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px 8px 3px 3px;
`;

export const StyledImageHolder = styled(ImageHolder)`
  width: 50%;
  margin: 0;
  display: inline-block;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  vertical-align: top;
  height: 100%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const AssetDetails = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 49%;
  padding: 0 2.5%;
  box-sizing: border-box;
  max-width: 600px;
  margin: 6px auto;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const BuyButton = styled(TemplatesButton)`
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;
  outline: none;
  padding: 0.85em 2em;
  border: none;
  font-size: ${fontSizes('medium')};
  min-width: 60%;
  margin-top: 1.5em;

  @media screen and (max-width: 700px) {
    text-align: center;
    width: 100%;
  }
`;

export const StyledIcon = styled(InPlayerIcon)`
  line-height: 15px;
  font-size: ${fontSizes('large')};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 0 0.4em 0 0;
  position: relative;
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding-bottom: 20px;
`;

export const Footer = styled(PreviewFooter)`
  border-top: 1px solid ${transparentize(0.9, colors.black)};
  margin-top: 1.6em;
  text-align: left;
  padding-top: 0.5em;
`;
