import styled from 'styled-components';
import { fontSizes } from 'utils/index';

// Components
import { PreviewBox, ImageHolder } from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '850px')};
  padding: 1em;
  overflow: hidden;
  border-radius: 8px 8px 3px 3px;
  margin: 0 auto;
`;

export const ImageWrapper = styled(ImageHolder)<{ backgroundImage: any }>`
  margin: 0;
  border: 0;
  outline: 0;
  width: 26%;
  height: 200px;
  vertical-align: middle;
  padding-bottom: 26%;
  float: left;
  background-image: url('${({ backgroundImage }) => backgroundImage}');

  @media screen and (max-width: 1350px) {
    vertical-align: top;
    margin: 0;
  }
`;

export const ItemDetails = styled.div`
  display: inline-block;
  width: 72%;
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
  width: 72%;
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

export const IconHolder = styled.div<{ protectedLabel: boolean }>`
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  float: right;
  display: ${({ protectedLabel }) => (protectedLabel ? 'block' : 'none')};
  font-size: ${fontSizes('small')};
  margin-left: 0.4rem;
`;
