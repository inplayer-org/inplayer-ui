// @flow
import React from 'react';
import styled from 'styled-components';

// components
import { MdWarning, MdInfo } from 'react-icons/md';
import Typography from '../Typography/index';
import Button from './index';

export default {
  component: Button,
  title: 'Button',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const withText = () => (
  <Container>
    <Typography variant="h1" color="black">
      Button
    </Typography>
    <Typography variant="p" description>
      Button is a component with a few modifiers: button--blue, button--red, button--disabled. You
      can use it directly like this:
    </Typography>
    <Button>Hello Button</Button>
  </Container>
);

export const withSizes = () => (
  <Container>
    <Typography variant="h1" color="black">
      Button with different sizes
    </Typography>
    <Typography variant="p" description>
      Button is a component with a few sizes such as: XS, SM, MD, LG and Full Width.
    </Typography>
    <Button size="xs">Button XS</Button> <br />
    <Button size="sm">Button SM</Button> <br />
    <Button size="md">Button MD</Button> <br />
    <Button size="lg">Button LG</Button> <br />
    <Button fullWidth>Button Full Width</Button>
  </Container>
);

export const withEmoji = () => (
  <Container>
    <Typography variant="h1" color="black">
      Button with Emoji
    </Typography>
    <Typography variant="p" description>
      Button is a component which can render even emojis.
    </Typography>
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </Container>
);

export const withModifiers = () => (
  <Container>
    <Typography variant="h1" color="black">
      Button
    </Typography>
    <Typography variant="p" description>
      Button is a component with a few modifiers: button--blue, button--red, button--disabled. You
      can use it directly like this:
    </Typography>
    <Typography variant="h3" color="black">
      Button hover:
    </Typography>
    <Button>No Modifier</Button> <br />
    <Button buttonModifiers={['hoverInfo']}>Hover Info</Button> <br />
    <Button buttonModifiers={['hoverDanger']}>Hover Danger</Button> <br />
    <Button buttonModifiers={['hoverWarning']}>Hover Warning</Button> <br />
    <Button buttonModifiers={['hoverSuccess']}>Hover Success</Button> <br />
    <Typography variant="h3" color="black">
      Button types:
    </Typography>
    <Button buttonModifiers={['buttonInfo']}>Button Info</Button> <br />
    <Button buttonModifiers={['buttonPrimary']}>Button Primary</Button> <br />
    <Button buttonModifiers={['buttonWarning']}>Button Warning</Button> <br />
    <Button buttonModifiers={['buttonSuccess']}>Button Success</Button> <br />
    <Button buttonModifiers={['buttonDanger']}>Button Danger</Button> <br />
    <Button disabled>Button Disabled</Button> <br />
    <Button buttonModifiers={['buttonLink']}>Button Link</Button>
  </Container>
);

export const withIcon = () => (
  <Container>
    <Typography variant="h1" color="black">
      Button with Icon
    </Typography>
    <Typography variant="p" description>
      Button is a component which can render an Icon.
    </Typography>
    <Button fullHeight icon={<MdWarning />} buttonModifiers={['buttonDanger']} />
    <br />
    <Button buttonModifiers={['buttonDanger']} icon={<MdInfo />} iconPosition="right">
      Button with Icon on Right
    </Button>
    <br />
    <Button buttonModifiers={['buttonDanger']} icon={<MdInfo />}>
      Button with Icon on left
    </Button>
  </Container>
);
