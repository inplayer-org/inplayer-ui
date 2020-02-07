import { ComponentData } from "../types";

const usage = `
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
`

const demoCode = `
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
`

const PillLabel: ComponentData = {
  path: `src/elements/PillLabel/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'size', type: 'unknown', default: 'md' },
  ]
}

export default PillLabel;