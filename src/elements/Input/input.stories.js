import React from 'react';
import Input from './index';
import InPlayerIcon from '../InPlayerIcon/index';

export default {
  component: Input,
  title: 'Input',
};

export const withText = () => (
  <Input type="text" placeholder="text" onChange={console.log} style={{ marginTop: '1rem' }} />
);

export const searchField = () => (
  <Input type="search" placeholder="Search" onChange={console.log} style={{ marginTop: '1rem' }} />
);

export const withIcon = () => (
  <Input type="text" placeholder="Input with icon" style={{ marginTop: '1rem' }} iconName="lock" />
);

export const withCustomIcon = () => (
  <Input
    type="text"
    placeholder="Input with custom icon"
    style={{ marginTop: '1rem' }}
    renderIcon={() => (
      <div style={{ marginLeft: '5px', top: '30px', position: 'relative' }}>
        <InPlayerIcon name="download" modifiers={['statusColorSuccess']} />
      </div>
    )}
  />
);

export const withSizes = () => (
  <>
    <Input size="xs" type="text" placeholder="Extra Small Input" style={{ marginTop: '1rem' }} />
    <Input size="sm" type="text" placeholder="Small Input" style={{ marginTop: '1rem' }} />
    <Input size="md" type="text" placeholder="Medium Input" style={{ marginTop: '1rem' }} />
    <Input size="lg" type="text" placeholder="Large Input" style={{ marginTop: '1rem' }} />
  </>
);
