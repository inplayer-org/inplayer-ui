import styled from 'styled-components';

// Components
import { PreviewBox, ImageHolder } from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '850px')};
  padding: 1em;
  overflow: hidden;
  border-radius: 8px 8px 3px 3px;
  margin: 0 auto;
`;

interface ImageWrapperProps {
  backgroundImage: string;
}

export const ImageWrapper = styled(ImageHolder)<ImageWrapperProps>`
  margin: 0;
  border: 0;
  outline: 0;
  width: 30%;
  vertical-align: middle;
  padding-bottom: 30%;
  float: left;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  @media screen and (max-width: 1350px) {
    vertical-align: top;
    margin: 0;
  }
`;

export const ItemDetails = styled.div`
  display: inline-block;
  width: 70%;
  padding: 1% 0 0 3%;
  box-sizing: border-box;
  margin: 6px auto;
  vertical-align: middle;
  @media screen and (max-width: 1350px) {
    vertical-align: top;
    margin: 0;
  }
`;

export const FootService = styled.div`
  width: 70%;
  padding: 0 0 0 3%;
  box-sizing: border-box;
  margin: 6px auto;
  display: inline-block;
  vertical-align: bottom;
  @media screen and (max-width: 1350px) {
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 auto;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: left;
  width: 50%;
  display: inline-block;
`;

export const PreviewFooter = styled.div`
  float: right;
  width: 50%;
  text-align: right;
  padding-top: 2em;
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
