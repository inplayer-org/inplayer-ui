import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
// import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontWeights, fontSizes } from 'utils';
// import * as fontSizeModifiers from 'modifiers';
import colors from 'theme/colors';

const DropdownContainer = styled.select`
  border: 1px solid ${colors.gray};
  border-radius: 0.188em;
  color: ${colors.fontGray};
  cursor: pointer;
  font-size: ${fontSizes('small')};
  font-weight: ${fontWeights('light')};
  outline: none;
  transition: all 0.3s ease;
  padding: 0.6em 1.8em 0.5em 0.8em;
  line-height: 1.5em;
  background-color: ${colors.white};
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='grey'/></g></svg>");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin: 0;
  box-sizing: border-box;
  appearance: none;
  &:hover {
    color: ${ifProp('color', prop('color'), colors.skyBlue)};
  }

  &:hover,
  &:focus {
    border-color: ${ifProp('color', prop('color'), colors.skyBlue)};
  }
  > option {
    color: ${colors.fontGray};
    font-weight: ${fontWeights('light')};
  }
`;
// ${applyStyleModifiers(fontSizeModifiers)};

interface Option {
  value: string;
  displayName: string;
}

interface DefaultOption {
  displayName: string;
  disabled?: boolean;
}

interface Props {
  value: string;
  onChange?: (value: string) => any;
  className?: string;
  color?: string;
  /** `Option` is a `{ value: string, displayName: string }` object */
  options: Array<Option>;
  style?: Record<string, any>;
  disabled?: boolean;
  defaultOption?: DefaultOption;
}

const Dropdown = ({ options, onChange, style, className, defaultOption, ...rest }: Props) => {
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <DropdownContainer onChange={onDropdownChange} className={className} style={style} {...rest}>
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

Dropdown.defaultProps = {
  className: '',
  style: {},
};

export default Dropdown;
