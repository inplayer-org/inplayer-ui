import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledLabel, Root, Input, Fill } from './RadioWrapper';
import {
  AnalyticsComponent,
  AnalyticsComponentType,
  AnalyticsEvents,
  AnalyticsProps,
} from '../../analytics';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  disabled?: boolean;
} & AnalyticsProps;

const Radio = ({
  label,
  id,
  checked,
  onChange,
  onBlur = () => {},
  disabled = false,
  name = '',
  tag = '',
  ...rest
}: RadioProps) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => (
      <StyledLabel disabled={disabled}>
        <Root disabled={disabled} checked={checked}>
          <Input
            id={id}
            type="radio"
            onChange={(e) => {
              onChange(e);
              if (tag) {
                tracker.track({
                  event: AnalyticsEvents.RADIOBUTTON_SELECT,
                  type: AnalyticsComponentType.RADIO,
                  tag,
                  pages,
                  merchantId,
                  ip,
                });
              }
            }}
            name={name}
            checked={checked}
            value={label}
            onBlur={onBlur}
            disabled={disabled}
            aria-checked={checked}
            {...rest}
          />
          <Fill />
        </Root>
        <span>{label}</span>
      </StyledLabel>
    )}
  </AnalyticsComponent>
);

export default Radio;
