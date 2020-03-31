import React from 'react';
import { PillLabel } from './index';

const PillLabelUsage = () => (
  <div style={{ marginTop: '20px', marginLeft: '20px' }}>
    <PillLabel>Default</PillLabel>
    <PillLabel size="xs" modifiers={['primary']}>
      Primary - xs
    </PillLabel>
    <PillLabel size="sm" modifiers={['success']}>
      Success - sm
    </PillLabel>
    <PillLabel size="md" modifiers={['info']}>
      Info - md
    </PillLabel>
    <PillLabel size="lg" modifiers={['warning']}>
      Warning - lg
    </PillLabel>
    <PillLabel modifiers={['danger']}>Danger - default size (md)</PillLabel>
  </div>
);
export default PillLabelUsage;
