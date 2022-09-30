import styled, { css } from 'styled-components';
import { FaRegPlayCircle } from 'react-icons/fa';
import { transparentize } from 'polished';

// utils
import colors from '../../theme/colors';

// Components
import {
  PreviewFooter,
  PreviewBox,
  DescriptionSpan,
  ImageHolder,
  TextWrapper,
} from '../shared/PreviewComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  max-width: ${({ width }) => (width ? '' : '90vh')};
  display: block;
  padding: 0;
  border-radius: 3px 3px 0 0;
`;

type StyledImageHolderProps = {
  backgroundImage: string;
};

export const StyledImageHolder = styled(ImageHolder)<StyledImageHolderProps>`
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      45deg,
      ${transparentize(0.2, colors.black)} 0%,
      ${transparentize(0.5, colors.black)} 100%
    ),
    url(${({ backgroundImage }) => backgroundImage});
`;

export const Header = styled(PreviewFooter)`
  border-bottom: 1px solid ${transparentize(0.6, colors.darkGray)};
  margin: 3%;
  text-align: right;
  padding-bottom: 1%;
`;

export const StyledTextWrapper = styled(TextWrapper)`
  position: relative;
  justify-content: flex-end;
  height: 350px;
  width: 100%;
  padding: 0 1rem;
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding-bottom: 13px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  position: relative;
`;

export const TitleBorder = styled.div`
  margin-bottom: 2%;
  left: 0;
  position: absolute;
  background: linear-gradient(${({ color }) => `${color},${color}`}) bottom left no-repeat;
  background-size: 100% 4px;
`;

export const StyledIcon = styled(FaRegPlayCircle)`
  font-size: ${({ theme }) => theme.font.sizes.extraLarge};
  color: ${({ color }) => color};
  cursor: pointer;

  :hover {
    outline: none;
    font-size: 60px;
    margin: -5px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 1rem;
`;
