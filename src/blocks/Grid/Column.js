// @flow
import styled, { type ReactComponentStyled } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { positionRelative } from 'modifiers';
import { gridScale } from 'utils';

const modifiers = {
  positionRelative,
};

type Props = {
  flex: string,
};

const Column: ReactComponentStyled<*> = styled.div`
  display: flex;
  flex: ${(props: Props) => props.flex};
  padding: ${gridScale(0.5)};
  ${applyStyleModifiers(modifiers)};
`;

Column.defaultProps = {
  flex: 'initial',
};

/** @component */
export default Column;
