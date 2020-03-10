// @flow
import React from 'react';

// components
import { FaBeer } from 'react-icons/fa';
import Input from './index';

export default {
  component: Input,
  title: 'Input',
};

export const withText = () => (
  <>
    <div>Text input is a input component for text. You can use it directly like this:</div>
    <Input type="text" placeholder="text" onChange={console.log} style={{ marginTop: '1rem' }} />
  </>
);

export const searchField = () => (
  <>
    <div>
      Text input is a input component for text. You can use it for a search component like this:
    </div>
    <Input
      type="search"
      placeholder="Search"
      onChange={console.log}
      style={{ marginTop: '1rem' }}
    />
  </>
);

export const withIcon = () => (
  <>
    <div>Text input is a input component for text. You can use it with an icon like this:</div>
    <Input
      type="text"
      placeholder="Input with icon"
      style={{ marginTop: '1rem' }}
      iconName="lock"
    />
  </>
);

export const withCustomIcon = () => (
  <>
    <div>
      Text input is a input component for text. You can use it with a custom icon like this:
    </div>
    <Input type="text" placeholder="Input with custom icon" icon={<FaBeer />} />
  </>
);

export const withSizes = () => (
  <>
    <div>Text input is a input component for text. You can use it in these different sizes:</div>
    <Input size="xs" type="text" placeholder="Extra Small Input" style={{ marginTop: '1rem' }} />
    <Input size="sm" type="text" placeholder="Small Input" style={{ marginTop: '1rem' }} />
    <Input size="md" type="text" placeholder="Medium Input" style={{ marginTop: '1rem' }} />
    <Input size="lg" type="text" placeholder="Large Input" style={{ marginTop: '1rem' }} />
  </>
);
