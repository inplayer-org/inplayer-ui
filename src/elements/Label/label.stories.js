import React from 'react';
import Label from './index';

export default {
  component: Label,
  title: 'Label',
};

export const withText = () => (
  <Label className="" size="Medium" style={{}}>
    Label
  </Label>
);

// Label with font size Modifiers

export const withSizes = () => (
  <>
    <Label modifiers={['fontSizeExtraSmall']}>Extra Small</Label>
    <br />
    <Label modifiers={['fontSizeSmall']}>Small</Label>
    <br />
    <Label modifiers={['fontSizeMedium']}>Medium</Label>
    <br />
    <Label modifiers={['fontSizeLarge']}>Large</Label>
  </>
);
