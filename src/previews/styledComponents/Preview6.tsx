import styled from 'styled-components';
import { Colors, InPlayerIcon } from '@inplayer-org/inplayer-ui';

// Components
import {
    PreviewBox,
    TemplatesButton,
    ImageHolder,
} from './SharedComponents';

interface PreviewBoxProps {
    width?: string;
    height?: string;
}
  
export const StyledPreviewBox = styled(PreviewBox)<PreviewBoxProps>`
    width: ${({ width }) => width ?? '580px'};
    height: ${({ height }) => height ?? '250px'};
    border: 1px solid ${Colors.gray};
    padding: 1em;
    overflow: hidden;
    background: ${Colors.white};
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
    color: ${Colors.fontGray};
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
    vertical-align: baseline;
    border-radius: 2px;
    box-sizing: border-box;
    outline: none;
    border: none;
    min-width: 60%;
    margin: 0;
`;

export const ButtonWrapper = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    text-align: left;
    width: 52%;
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
    color: ${Colors.fontGray};
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

interface ImageHolderProps {
    backgroundImage: string;
}

export const ImageWrapper = styled(ImageHolder)<ImageHolderProps>`
    margin: 0;
    border: 0;
    outline: 0;
    width: 40%;
    height: 100%;
    vertical-align: middle;
    float: left;
    background-image: url('${({ backgroundImage }) => backgroundImage}');
`;