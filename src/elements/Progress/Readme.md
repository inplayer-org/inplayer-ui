```jsx static
import { Progress } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Progress
      type="circle"
      percent="10"
      strokeWidth="4"
      strokeColor="#D3D3D3"
    />
  );
}
```

### Demo

```jsx
const containerStyle = {
  width: '250px',
};
const circleContainerStyle = {
  width: '250px',
  height: '250px',
  display: 'inline-block',
};

<div>
  <h3>Line Progress 10%</h3>
  <div style={containerStyle}>
    <Progress type="line" percent="10" strokeWidth="2" />
  </div>
  <h3>Circle Progress 40%</h3>
  <div style={circleContainerStyle}>
    <Progress type="circle" percent="40" strokeWidth="3" />
  </div>
</div>;
```
