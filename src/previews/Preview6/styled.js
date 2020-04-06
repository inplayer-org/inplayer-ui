// @flow
import styled from 'styled-components';
import colors from 'config/colors';

// Components
import { PreviewBox, ImageHolder } from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  max-width: ${({ width }) => width ?? '100%'};
  border: 1px solid ${colors.gray};
  padding: 1em;
  overflow: hidden;
  background: ${colors.white};
  border-radius: 8px 8px 3px 3px;
  margin: 0 auto;
  box-sizing: border-box;
  clear: both;
  position: relative;
`;

export const FooterLink = styled.a`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  vertical-align: baseline;
  background: transparent;
  line-height: inherit;
  color: ${colors.fontGray};
`;

export const IconHolder = styled.div`
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  float: right;
  display: ${({ protectedLabel }) => (protectedLabel ? 'block' : 'none')};
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-left: 0.4rem;
`;

export const PreviewFooter = styled.div`
  float: right;
  width: 50%;
  text-align: right;
  padding-top: 0.8em;
  line-height: 1.3em;
`;

export const ButtonWrapper = styled.div`
  text-align: left;
  width: 50%;
  display: inline-block;
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

export const ImageWrapper = styled(ImageHolder)`
  margin: 0;
  border: 0;
  outline: 0;
  width: 26%;
  height: 200px;
  vertical-align: middle;
  padding-bottom: 26%;
  overflow: hidden;
  float: left;
  position: relative;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 1350px) {
    vertical-align: top;
    margin: 0;
  }
`;
