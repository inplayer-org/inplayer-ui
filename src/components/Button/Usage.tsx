import React from 'react';
import { MdDelete, MdErrorOutline } from 'react-icons/md';
import Button from '.';

const Usage = () => (
  <>
    <div>
      <Button fullHeight icon={<MdDelete />} buttonModifiers={['buttonDanger']} />
      <br />
      <Button buttonModifiers={['buttonDanger']} icon={<MdErrorOutline />} iconPosition="right">
        Button with Icon on Right!
      </Button>
      <br />
      <Button buttonModifiers={['buttonDanger']} icon={<MdErrorOutline />}>
        Button with Icon Color Modifier
      </Button>
      <br />
      <Button icon={<MdDelete />}>Button with Custom Icon</Button>
      <Button icon={<MdDelete color="red" />}>Button with Custom Icon Color</Button>
    </div>
    <div>
      <Button size="xs">Button XS</Button> <br />
      <Button size="sm">Button SM</Button> <br />
      <Button size="md">Button MD</Button> <br />
      <Button size="lg">Button LG</Button> <br />
      <Button fullWidth>Button Full Width</Button> <br />
    </div>
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
  </>
);

export default Usage;
