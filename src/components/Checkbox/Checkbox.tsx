import React, { ChangeEvent, RefObject } from 'react';
import Label from '../Label';
import CheckboxWrapper from './CheckboxWrapper';
import {
  AnalyticsComponent,
  AnalyticsComponentType,
  AnalyticsProps,
  AnalyticsEvents,
} from '../../analytics';

type Props = {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: RefObject<HTMLDivElement> | null;
  disabled?: boolean;
} & AnalyticsProps;

const Checkbox: React.FC<Props> = ({
  label,
  id,
  onChange,
  containerRef = null,
  disabled = false,
  tag = '',
  ...rest
}) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>): any => onChange(e.target.checked);

  return (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <CheckboxWrapper ref={containerRef}>
          <input
            disabled={disabled}
            type="checkbox"
            id={id}
            onChange={(e) => {
              onCheckboxChange(e);

              if (tag) {
                if (e.target.checked) {
                  tracker.track({
                    event: AnalyticsEvents.CHECKBOX_ON,
                    type: AnalyticsComponentType.CHECKBOX,
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                } else {
                  tracker.track({
                    event: AnalyticsEvents.CHECKBOX_OFF,
                    type: AnalyticsComponentType.CHECKBOX,
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                }
              }
            }}
            {...rest}
          />
          <Label htmlFor={id}>{label}</Label>
        </CheckboxWrapper>
      )}
    </AnalyticsComponent>
  );
};

export default Checkbox;
