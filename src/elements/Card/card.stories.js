import React from 'react';
import { Typography } from 'src/index';
import Card from './index';

export default {
  component: Card,
  title: 'Card',
};

export const SimpleCard = props => (
  <>
    <Card title="Card with title" titleVariant="h1" style={{ width: 400 }}>
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
  </>
);
