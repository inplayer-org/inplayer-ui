import styled, { css } from 'styled-components';

// Components
import {
  PreviewBox,
  ImageHolder,
  BuyButton,
  RestrictedAssetContainer,
} from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '850px')};
  padding: 1em;
  overflow: hidden;
  border-radius: 8px 8px 3px 3px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 1rem;
  position: relative;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

interface ImageWrapperProps {
  backgroundImage: string;
  isRestrictedAsset?: boolean;
}

export const ImageWrapper = styled(ImageHolder)<ImageWrapperProps>`
  margin: 0;
  border: 0;
  outline: 0;
  width: 100%;
  vertical-align: middle;
  padding-bottom: 30%;
  float: left;
  grid-row: 1 / span 2;
  height: auto;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  @media screen and (max-width: 1100px) {
    vertical-align: top;
    margin: 0;
    grid-row: 1;
  }

  ${({ isRestrictedAsset }) =>
    isRestrictedAsset &&
    css`
      filter: brightness(0.3);
    `}
`;

export const ItemDetails = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  grid-column: 2 / span 2;
`;

export const ButtonWrapper = styled.div`
  text-align: left;
  margin-right: 2rem;
  display: inline-block;
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledBuyButton = styled(BuyButton)`
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const PreviewFooter = styled.div`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1100px) {
    grid-column: 2 / span 2;
  }
`;

interface IconHolderProps {
  hasProtectedByLabel: boolean;
}

export const IconHolder = styled.div<IconHolderProps>`
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  float: right;
  display: ${({ hasProtectedByLabel }) => (hasProtectedByLabel ? 'block' : 'none')};
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-left: 0.4rem;
`;

export const StyledRestrictedAssetContainer = styled(RestrictedAssetContainer)`
  width: 35%;
  top: 50%;
  left: 20%;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    svg {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0rem;
    }
  }
  @media screen and (max-width: 1100px) {
    height: 50%;
    left: 25%;
    top: 35%;
  }
`;
