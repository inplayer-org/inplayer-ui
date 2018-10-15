import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { positionRelative } from '../../modifiers';

const modifiers = {
  positionRelative,
};

const Row = styled.div`
  display: flex;
  flex: 1;
  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Row;
