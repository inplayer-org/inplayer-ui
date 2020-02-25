import React from 'react';
import { Colors } from '@inplayer-org/inplayer-ui';
import { withTheme } from "styled-components";

// Images
import previewImg from 'assets/ip-preview-premium.png';

// Types
import { Branding } from './types';

// Components
import TextEditor from '../components/TextEditor';
import {
  StyledPreviewBox,
  ImageWrapper,
  ItemDetails,
  FootService,
  ButtonWrapper,
  Button,
  PreviewFooter,
  FooterLink,
  IconHolder,
  Icon,
} from './styledComponents/Preview6';

interface Props {
  branding?: Branding;
  width?: string;
  height?: string;
  theme?: any;
}

const Preview6 = ({
  branding: {
    paywall_cover_photo: coverPhoto = previewImg,
    preview_title: title = '<h1><strong>Title</strong></h1>',
    preview_description: description = '<p>Description</p>',
    preview_button_label: buttonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = Colors.green,
    preview_buttons_text_color: buttonTextColor = Colors.white,
  } = {},
  width,
  height,
}: Props) => (
  <StyledPreviewBox width={width} height={height}>
    <ImageWrapper backgroundImage={coverPhoto} />
    <ItemDetails>
      <TextEditor value={title} displayToolbar={false} readOnly />
      <TextEditor value={description} displayToolbar={false} readOnly />
      <FootService>
        <ButtonWrapper>
          <Button buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
            <p>{buttonLabel}</p>
          </Button>
        </ButtonWrapper>
        <PreviewFooter>
          <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
          <IconHolder>
            <Icon name="lock" />
          </IconHolder>
        </PreviewFooter>
      </FootService>
    </ItemDetails>
  </StyledPreviewBox>
);

export default withTheme(Preview6);
