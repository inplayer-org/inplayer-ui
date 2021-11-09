import React, { SelectHTMLAttributes, ChangeEvent } from 'react';
import { snakeCase } from 'lodash';
import styled from 'styled-components';
import DropdownContainer from './DropdownContainer';
import { AnalyticsComponent, AnalyticsProps } from '../../analytics';

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
  tag,
  onClick,
  ...rest
}) => {
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <DropdownContainer
          onChange={
            !tag
              ? onDropdownChange
              : (e) => {
                  if (onDropdownChange) onDropdownChange(e);

                  const selectedValue = e.currentTarget.selectedIndex;
                  tracker.track({
                    event: 'dropdown_change',
                    type: 'dropdown',
                    tag: `dropdown_${snakeCase(e.currentTarget.options[selectedValue].text)}`,
                    pages,
                    merchantId,
                    ip,
                  });
                }
          }
          onClick={
            !tag
              ? onClick
              : (e) => {
                  if (onClick) onClick(e);

                  tracker.track({
                    event: 'dropdown_select',
                    type: 'dropdown',
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                }
          }
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
      )}
    </AnalyticsComponent>
  );
};

export default Dropdown;
