import styled from 'styled-components';
import PropTypes from 'prop-types';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { positionRelative } from '../../modifiers';
import { gridScale } from '../../utils';

const modifiers = {
  positionRelative,
};

const Column = styled.div`
  display: flex;
  flex: ${props => props.flex};
  padding: ${gridScale(0.5)};
  ${applyStyleModifiers(modifiers)};
`;

Column.propTypes = {
  flex: PropTypes.string,
};

Column.defaultProps = {
  flex: 'initial',
};

/** @component */
export default Column;
