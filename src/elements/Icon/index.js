import styled from 'styled-components';
import FA from 'react-fontawesome';
import {
  statusColorPrimary,
  statusColorWarning,
  statusColorInfo,
  statusColorSuccess,
  statusColorDanger,
} from 'modifiers';
import { fontSizes } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  statusColorPrimary,
  statusColorInfo,
  statusColorWarning,
  statusColorSuccess,
  statusColorDanger,
};

const Icon = styled(FA)`
  display: inline-block;
  font-size: ${fontSizes('medium')};
  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Icon;
