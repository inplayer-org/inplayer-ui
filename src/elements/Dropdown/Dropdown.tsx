import React, { SelectHTMLAttributes, CSSProperties, ChangeEvent } from 'react';
import DropdownContainer from './DropdownContainer';

type Option = {
  value: string;
  displayName: string;
};

type DefaultOption = {
  displayName: string;
  disabled?: boolean;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  modifiers?: Array<string>;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  color?: string;
  options: Array<Option>;
  disabled?: boolean;
  defaultOption?: DefaultOption;
};

const Dropdown: React.FC<Props> = ({ options, onChange, defaultOption, ...rest }) => (
  <DropdownContainer onChange={(e) => onChange(e)} {...rest}>
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

export default Dropdown;
