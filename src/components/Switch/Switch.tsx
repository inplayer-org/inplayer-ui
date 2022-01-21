import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import SwitchWrapper from './SwitchWrapper';
import Label from '../Label';
import {
  AnalyticsComponent,
  AnalyticsProps,
  AnalyticsEvents,
  AnalyticsComponentType,
} from '../../analytics';

type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
  className?: string;
} & AnalyticsProps;

const MarginLeftLabel = styled(Label)`
  margin-right: 0.5rem;
  position: relative;
  display: flex;
  width: fit-content;
  height: 21px;
  line-height: 21px;
`;

const Span = styled.span`
  margin-right: 1rem;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: relative;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.darkGray};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  width: 46px;
  height: 1rem;
  margin: auto 0;
  ${Input}:checked + & {
    background-color: ${colors.skyBlue};
    ::before {
      transform: translateX(24px);
    }
  }

  ::before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 0px;
    bottom: -4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    border: 1px solid ${colors.gray};
  }
`;

const Switch = ({
  id,
  checked,
  label,
  disabled = false,
  onChange,
  className,
  tag = '',
}: SwitchProps) => {
  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      onChange(e.target.checked);
    }
  };

  return (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <SwitchWrapper className={className}>
          <MarginLeftLabel disabled={disabled} htmlFor={id}>
            <Span>{label}</Span>
            <Input
              type="checkbox"
              id={id}
              disabled={disabled}
              checked={checked}
              onChange={(e) => {
                if (tag) {
                  tracker.track({
                    event: e.target.checked
                      ? AnalyticsEvents.SWITCH_ON
                      : AnalyticsEvents.SWITCH_OFF,
                    type: AnalyticsComponentType.SWITCH,
                    tag,
                    pages,
                    merchantId,
                    ip,
                  });
                }
                onToggleChange(e);
              }}
            />
            <Slider />
          </MarginLeftLabel>
        </SwitchWrapper>
      )}
    </AnalyticsComponent>
  );
};

export default Switch;
