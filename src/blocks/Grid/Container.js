import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { positionRelative } from 'modifiers';
import { gridScale } from 'utils';

const modifiers = {
  fluid: () => `padding: 0;`,
  positionRelative,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${gridScale(0.5)};
  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Container;
