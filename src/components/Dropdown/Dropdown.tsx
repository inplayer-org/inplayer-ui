import React, { SelectHTMLAttributes, ChangeEvent, useState } from 'react';
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
  onChange?: (value: string) => void;
  color?: string;
  options: Array<Option>;
  disabled?: boolean;
  defaultOption?: DefaultOption;
  className?: string;
};

const Dropdown: React.FC<Props> = ({
  options,
  onChange = () => null,
  defaultOption,
  className,
  ...rest
}) => {
  const [dropdownChange, setDropdownChange] = useState(false);

  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownChange(true);
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <DropdownContainer
      hasDropdownChanged={dropdownChange}
      onChange={onDropdownChange}
      className={className}
      {...rest}
    >
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

export default Dropdown;
