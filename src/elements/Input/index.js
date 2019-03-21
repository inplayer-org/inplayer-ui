// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';

import Icon from 'elements/Icon';

const StyledInput = styled.input`
  width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  color: ${uiColors('text.main')};
  transition: all ease 300ms;
  background: ${colors.white};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  padding: 10px 18px 11px;
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  line-height: 1;

  &:focus {
    border-bottom: 1px solid ${uiColors('primary.main')};
  }

  ${ifProp(
    { type: 'search' },
    css`
      padding-left: 28px;
      ::placeholder {
        position: relative !important;
        left: 1px !important;
      }

      ::-webkit-search-decoration,
      ::-webkit-search-cancel-button,
      ::-webkit-search-results-button,
      ::-webkit-search-results-decoration {
        cursor: pointer;
      }
    `
  )};
`;

const InputIcon = styled(Icon)`
  position: absolute;
  color: ${colors.darkGray};
  left: 8px;
  top: 19px;
`;

const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
`;

type Props = {
  type: string,
  placeholder: string,
  id: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => any,
  value: string | Array<string> | number,
};

const Input = React.forwardRef(({ type, placeholder, onChange, ...rest }: Props, ref) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>): any => {
    e.persist();
    if (onChange) {
      onChange(e);
    }
  };

  return type === 'search' ? (
    <SearchWrapper>
      <InputIcon name="search" />
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
        onChange={onInputChange}
      />
    </SearchWrapper>
  ) : (
    <StyledInput
      ref={ref}
      type={type}
      placeholder={placeholder}
      onChange={onInputChange}
      {...rest}
    />
  );
});

/** @component */
export default Input;
