// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';

import Icon from 'elements/Icon';

const TextFieldWrapper = styled.input`
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
  min-width: 260px;
  max-width: 560px;
  width: 100%;
  margin: 6px 0;

  &:focus {
    border-bottom: 1px solid ${uiColors('primary.main')};
  }

  ${ifProp(
    'search',
    css`
      padding-left: 28px;
      ::-webkit-input-placeholder {
        position: relative !important;
        left: 1px !important;
      }

      :-moz-placeholder {
        /* Firefox 18- */
        position: relative !important;
        left: 1px !important;
      }

      ::-moz-placeholder {
        /* Firefox 19+ */
        position: relative !important;
        left: 1px !important;
      }

      :-ms-input-placeholder {
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
  position: relative;
  max-width: 560px;
`;

type Props = {
  type: string,
  placeholder: string,
  name: string,
  id: string,
};

const TextField = ({ type, placeholder, name, onChange, ...rest }: Props) => {
  const onInputChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.value);

  return type === 'search' ? (
    <SearchWrapper>
      <InputIcon name={name} />
      <TextFieldWrapper type={type} placeholder={placeholder} {...rest} onChange={onInputChange} />
    </SearchWrapper>
  ) : (
    <TextFieldWrapper type={type} placeholder={placeholder} onChange={onInputChange} />
  );
};

/** @component */
export default TextField;
