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
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  color?: string;
  options: Array<Option>;
  style?: CSSProperties;
  disabled?: boolean;
  defaultOption?: DefaultOption;
};

const Dropdown = ({
  options,
  onChange = () => null,
  style = {},
  className = '',
  defaultOption,
  ...rest
}: Props) => (
  <DropdownContainer onChange={(e) => onChange(e)} className={className} style={style} {...rest}>
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
