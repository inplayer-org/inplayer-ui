import React, { SelectHTMLAttributes, ChangeEvent } from 'react';
import DropdownContainer from './DropdownContainer';
import { AnalyticsProps } from '../../analytics';

export type Option = {
  value: string;
  displayName: string;
} & AnalyticsProps;

type DefaultOption = {
  displayName: string;
  disabled?: boolean;
} & AnalyticsProps;

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

type Props = SelectHTMLProps & {
  modifiers?: Array<string>;
  value: string;
  onChange?: (value: string) => void;
  color?: string;
  options: Array<Option>;
  disabled?: boolean;
  defaultOption?: DefaultOption;
  className?: string;
} & AnalyticsProps;

const Dropdown: React.FC<Props> = ({
  options,
  onChange = () => null,
  defaultOption,
  className,
  ...rest
}) => {
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <DropdownContainer onChange={onDropdownChange} className={className} {...rest}>
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
