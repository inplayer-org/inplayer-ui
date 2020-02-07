import { ComponentData } from "../types";

const usage = `
  import React from 'react';
  import Card from '@inplayer-org/inplayer-ui';
  import Typography from '@inplayer-org/inplayer-ui';

  const SimpleCard = props => (
    <Card title={'Card with title'} titleVariant="h1" style={{ width: 400 }}>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
      <Typography variant="p">Card content</Typography>
    </Card>
  );
`;

const demoCode = `<div>
  <Card title={'Card with title'} titleVariant="h1" style={{ width: 400 }}>
    <Typography variant="p">Card content</Typography>
    <Typography variant="p">Card content</Typography>
    <Typography variant="p">Card content</Typography>
  </Card>
  <br />
  <Card style={{ width: 400 }}>
    <Typography variant="p">Card content</Typography>
    <Typography variant="p">Card content</Typography>
    <Typography variant="p">Card content</Typography>
  </Card>
</div>`;

const Card: ComponentData = {
  path: 'src/elements/Card/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'children', type: 'Node', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'style', type: 'Object', default: '{ }'},
    { name: 'title', type: 'string' },
    { name: 'titleVariant', type: 'string', default: 'h1' },
  ],
}

export default Card;