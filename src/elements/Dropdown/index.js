// @flow
import React from 'react';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'utils';
import * as fontSizeModifiers from 'modifiers';
import colors from 'config/colors';

const DropdownContainer = styled.select`
  border: thin solid ${colors.gray};
  border-radius: 4px;
  color: ${uiColors('text.light')};
  cursor: pointer;
  font-size: ${fontSizes('small')};
  font-weight: ${fontWeights('light')};
  outline: none;
  transition: all 0.3s ease;
  padding: 0.5rem 3.5rem 0.5rem 1rem;
  line-height: 1.5em;
  background-color: ${colors.white};
  background-repeat: no-repeat;
  background-size: 5px 5px, 5px 5px, 1px 1.5rem;
  /* stylelint-disable value-list-comma-newline-after */
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 1.25rem) calc(1rem + 0.125rem),
    calc(100% - 0.9375rem) calc(1rem + 0.125rem), calc(100% - 2.5rem) 0.5rem;

  /* reset browser default styling  */
  margin: 0;
  box-sizing: border-box;
  appearance: none;

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

type DefaultOption = {
  displayName: string,
  disabled?: boolean,
};

type Props = HTMLSelectElement & {
  value: string,
  onChange?: (value: string) => any,
  className?: string,
  color?: string,
  /** `Option` is a `{ value: string, displayName: string }` object */
  options: Array<Option>,
  style?: Object,
  disabled?: boolean,
  defaultOption?: DefaultOption,
};

const Dropdown = ({ options, onChange, style, className, defaultOption, ...rest }: Props) => {
  const onDropdownChange = (e: SyntheticEvent<*>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <DropdownContainer onChange={onDropdownChange} className={className} style={style} {...rest}>
      {defaultOption && (
        <option value="" disabled={defaultOption.disabled}>
          {defaultOption.displayName}
        </option>
      )}
      {options.map(({ value, displayName }) => (
        <option value={value} key={value}>
          {displayName}
        </option>
      ))}
    </DropdownContainer>
  );
};

Dropdown.defaultProps = {
  className: '',
  style: {},
};

export default Dropdown;
