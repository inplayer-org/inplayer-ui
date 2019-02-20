```jsx static
import { PillLabel } from '@inplayer-org/inplayer-ui';

const PillExample = () => (
  <div>
    <PillLabel>Test Pill</PillLabel>
    <PillLabel modifiers={['primary']}>Test Pill</PillLabel>
    <PillLabel size="lg" modifiers={['warning']}>Test Pill</PillLabel>
    <PillLabel size="sm" modifiers={['danger']}>Test Pill</PillLabel>
    <PillLabel size="xs" modifiers={['success']}>Test Pill</PillLabel>
  </div>
);
```

```jsx
<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}}>
  <PillLabel>Test Pill</PillLabel>
  <PillLabel modifiers={['primary']}>Test Pill</PillLabel>
  <PillLabel size="lg" modifiers={['warning']}>Test Pill</PillLabel>
  <PillLabel size="sm" modifiers={['danger']}>Test Pill</PillLabel>
  <PillLabel size="xs" modifiers={['success']}>Test Pill</PillLabel>
</div>
```