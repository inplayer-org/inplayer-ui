```jsx static
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
```

### Demo

```jsx
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
```
