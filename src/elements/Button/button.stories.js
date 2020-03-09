import React from 'react';
import { MdWarning, MdInfo } from 'react-icons/md';
import Button from './index';

export default {
  component: Button,
  title: 'Button',
};

export const withText = () => <Button>Hello Button</Button>;

export const withSizes = () => (
  <>
    <Button size="xs">Button XS</Button> <br />
    <Button size="sm">Button SM</Button> <br />
    <Button size="md">Button MD</Button> <br />
    <Button size="lg">Button LG</Button> <br />
    <Button fullWidth>Button Full Width</Button>
  </>
);

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withModifiers = () => (
  <div>
    <h3>Button hover:</h3>
    <Button>No Modifier</Button> <br />
    <Button buttonModifiers={['hoverInfo']}>Hover Info</Button> <br />
    <Button buttonModifiers={['hoverDanger']}>Hover Danger</Button> <br />
    <Button buttonModifiers={['hoverWarning']}>Hover Warning</Button> <br />
    <Button buttonModifiers={['hoverSuccess']}>Hover Success</Button> <br />
    <h3>Button types:</h3>
    <Button buttonModifiers={['buttonInfo']}>Button Info</Button> <br />
    <Button buttonModifiers={['buttonPrimary']}>Button Primary</Button> <br />
    <Button buttonModifiers={['buttonWarning']}>Button Warning</Button> <br />
    <Button buttonModifiers={['buttonSuccess']}>Button Success</Button> <br />
    <Button buttonModifiers={['buttonDanger']}>Button Danger</Button> <br />
    <Button disabled>Button Disabled</Button> <br />
    <Button buttonModifiers={['buttonLink']}>Button Link</Button>
  </div>
);

export const withIcon = () => (
  <div>
    <Button fullHeight icon={<MdWarning />} buttonModifiers={['buttonDanger']} />
    <br />
    <Button buttonModifiers={['buttonDanger']} icon={<MdInfo />} iconPosition="right">
      Button with Icon on Right
    </Button>
    <br />
    <Button buttonModifiers={['buttonDanger']} icon={<MdInfo />}>
      Button with Icon on left
    </Button>
  </div>
);
