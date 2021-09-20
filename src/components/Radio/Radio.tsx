import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import { TrackHierarchy, TagProps, Tracker } from '../../analytics';

import { StyledLabel, Root, Input, Fill } from './RadioWrapper';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  disabled?: boolean;
} & TagProps;

const TrackRadio = ({
  tag,
  hierarchy,
  position,
  label,
  id,
  checked,
  onChange,
  onBlur = () => {},
  disabled = false,
  name = '',
  ...rest
}: RadioProps & { hierarchy: string[]; tracker: Tracker }) => {
  useEffect(() => {
    if (checked) {
      tracker.emit({ on: 'radio', name: 'check', tag, option: id, hierarchy, position });
    }
  }, [checked]);

  return (
    <StyledLabel disabled={disabled}>
      <Root disabled={disabled} checked={checked}>
        <Input
          id={id}
          type="radio"
          onChange={onChange}
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
  );
};

const Radio = (props: RadioProps) => (
  <TrackHierarchy.Consumer>
    {({ hierarchy, tracker }) => <TrackRadio {...props} hierarchy={hierarchy} tracker={tracker} />}
  </TrackHierarchy.Consumer>
);

export default Radio;
