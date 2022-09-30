import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { MdStar } from 'react-icons/md';

// utils
import colors from '../../theme/colors';

// Components
import {
  PreviewBox,
  ImageHolder,
  PreviewFooter,
  DescriptionSpan,
  RestrictedAssetContainer,
} from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ width }) => (width ? '' : '90vh')};
  font-size: ${({ theme }) => theme.font.sizes.large};
  overflow: hidden;
  padding: 0;
  border-radius: 8px 8px 3px 3px;
  height: ${({ height }) => height ?? 'auto'};
  min-height: ${({ minHeight }) => minHeight ?? 'auto'};
  width: ${({ width }) => width ?? 'auto'};
  min-width: ${({ minWidth }) => minWidth ?? '250px'};
`;

interface StyledImageHolder {
  backgroundImage: string;
  isRestrictedAsset?: boolean;
}

export const StyledImageHolder = styled(ImageHolder)<StyledImageHolder>`
  width: 50%;
  height: auto;
  padding-bottom: 60%;
  margin: 0;
  display: inline-block;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  ${({ isRestrictedAsset }) =>
    isRestrictedAsset &&
    css`
      filter: brightness(0.3);
    `}
`;

export const AssetDetails = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 49%;
  padding: 0 2.5%;
  box-sizing: border-box;
  max-width: 600px;
  margin: 6px auto;
  align-self: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding: 20px 0;
`;

export const BuyButtonWrapper = styled.div`
  display: grid;
  text-align: left;
  width: 80%;
  @media screen and (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledIcon = styled(MdStar)`
  line-height: 15px;
  font-size: ${({ theme }) => theme.font.sizes.large};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 0 0.4em 0 0;
  position: relative;
`;

export const Footer = styled(PreviewFooter)`
  border-top: 1px solid ${transparentize(0.9, colors.black)};
  margin-top: 1.6em;
  text-align: left;
  padding-top: 0.5em;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledRestrictedAssetContainer = styled(RestrictedAssetContainer)`
  width: 50%;
  left: 25%;
  @media screen and (max-width: 768px) {
    width: 100%;
    left: 50%;
    top: 25%;
  }
  @media screen and (max-width: 480px) {
    top: 20%;
  }
`;
