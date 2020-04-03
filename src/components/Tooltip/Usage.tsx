import React from 'react';
import { Tooltip } from '.';
import { Button } from '../../elements/Button';

const App = () => (
  <div style={{ margin: '300px' }}>
    <Tooltip content="😎">
      <Button>Hover me!</Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip content="Tooltip at the left" placement="left" background="red">
      <Button>Hover me too!</Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip content="Tooltip at the right" placement="right">
      <Button>Hover me as well!</Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip content={`Tooltip at the bottom\nTooltip at the bottom`} placement="bottom">
      <Button>Hover me also!</Button>
    </Tooltip>
    <br />
    <br />
    <Tooltip content="Hello!" behavior="click" placement="right">
      <Button>Click me!</Button>
    </Tooltip>
  </div>
);

export default App;
