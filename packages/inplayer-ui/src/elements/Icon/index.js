import styled from 'styled-components';
import FA from 'packages/inplayer-ui/src/elements/Icon/react-fontawesome';
import {
  statusColorPrimary,
  statusColorWarning,
  statusColorInfo,
  statusColorSuccess,
  statusColorDanger,
} from 'packages/inplayer-ui/src/elements/Icon/modifiers';
import { fontSizes } from 'packages/inplayer-ui/src/elements/Icon/utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  statusColorPrimary,
  statusColorInfo,
  statusColorWarning,
  statusColorSuccess,
  statusColorDanger,
};

const Icon = styled(FA)`
  ${({ color }) => color && `color: ${color}`};
  display: inline-block;
  font-size: ${fontSizes('medium')};
  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Icon;
