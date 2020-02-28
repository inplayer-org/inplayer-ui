// @flow
import styled from 'styled-components';
import InPlayerIcon from 'elements/InPlayerIcon';
import colors from 'config/colors';

// Components
import { PreviewBox, TemplatesButton, ImageHolder } from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  width: ${({ width }) => width ?? '580px'};
  height: ${({ height }) => height ?? '250px'};
  border: 1px solid ${colors.gray};
  padding: 1em;
  overflow: hidden;
  background: ${colors.white};
  border-radius: 8px 8px 3px 3px;
  display: flex;
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
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-left: 0.4rem;
`;

export const PreviewFooter = styled.div`
  margin: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  width: 50%;
  float: right;
  text-align: right;
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  line-height: 1.3em;
  display: flex;
  align-items: center;
`;

export const Button = styled(TemplatesButton)`
  border-radius: 2px;
  box-sizing: border-box;
  outline: none;
  border: none;
  min-width: 60%;
  margin: 0;
  width: 140px;
`;

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  text-align: left;
  display: inline-block;
`;

export const FootService = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  margin-right: 10px;
`;

export const ItemDetails = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  padding: 0 0 0 1rem;
`;

export const Icon = styled(InPlayerIcon)`
  font-size: 20px;
  color: ${colors.fontGray};
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  line-height: 15px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  position: relative;
`;

export const ImageWrapper = styled(ImageHolder)`
  margin: 0;
  border: 0;
  outline: 0;
  width: 40%;
  height: 100%;
  vertical-align: middle;
  float: left;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
`;
