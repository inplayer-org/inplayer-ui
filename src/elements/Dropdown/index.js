// @flow
import React from 'react';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'utils';
import * as fontSizeModifiers from 'modifiers';
import colors from 'config/colors';

const DropdownContainer = styled.select`
  border: 1px solid ${colors.gray};
  border-radius: 2px;
  color: ${uiColors('text.light')};
  cursor: pointer;
  font-size: ${fontSizes('small')};
  font-weight: ${fontWeights('light')};
  outline: none;
  padding: 0.2em;
  transition: all 0.3s ease;

  &:hover {
    color: ${ifProp('color', prop('color'), uiColors('primary.main'))};
  }

  &:hover,
  &:focus {
    border-color: ${ifProp('color', prop('color'), uiColors('primary.main'))};
  }

  > option {
    color: ${uiColors('text.light')};
    font-weight: ${fontWeights('light')};
  }

  ${applyStyleModifiers(fontSizeModifiers)};
`;

type Option = {
  value: string,
  displayName: string,
};

type Props = HTMLSelectElement & {
  value: string,
  onChange: (value: string) => any,
  className?: string,
  color?: string,
  /** `Option` is a `{ value: string, displayName: string }` object */
  options: Array<Option>,
};

const Dropdown = ({ options, onChange, ...rest }: Props) => {
  const onDropdownChange = (e: SyntheticEvent<*>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <DropdownContainer onChange={onDropdownChange} {...rest}>
      {options.map(({ value, displayName }) => (
        <option value={value}>{displayName}</option>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
