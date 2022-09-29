import React, { SelectHTMLAttributes, ChangeEvent } from 'react';
import { snakeCase } from 'lodash';
import DropdownContainer from './DropdownContainer';
import {
  AnalyticsEvents,
  AnalyticsComponentType,
  AnalyticsComponent,
  AnalyticsProps,
} from '../../analytics';

export type Option = {
  value: string;
  displayName: string;
  disabled?: boolean;
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
          onChange={(e) => {
            onDropdownChange?.(e);

            if (tag) {
              const selectedValue = e.currentTarget.selectedIndex;
              tracker.track({
                event: AnalyticsEvents.DROPDOWN_CHANGE,
                type: AnalyticsComponentType.DROPDOWN,
                tag: `${tag}_${snakeCase(e.currentTarget.options[selectedValue].text)}`,
                pages,
                merchantId,
                ip,
              });
            }
          }}
          onClick={(e) => {
            onClick?.(e);

            if (tag) {
              tracker.track({
                event: AnalyticsEvents.DROPDOWN_SELECT,
                type: AnalyticsComponentType.DROPDOWN,
                tag,
                pages,
                merchantId,
                ip,
              });
            }
          }}
          className={className}
          {...rest}
        >
          {defaultOption && (
            <option value="" disabled={defaultOption.disabled}>
              {defaultOption.displayName}
            </option>
          )}
          {options.map(({ value, displayName, disabled = false }) => (
            <option disabled={disabled} value={value} key={value}>
              {displayName}
            </option>
          ))}
        </DropdownContainer>
      )}
    </AnalyticsComponent>
  );
};

export default Dropdown;
