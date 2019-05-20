// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';
import { ifProp, switchProp } from 'styled-tools';
import Icon from 'elements/Icon';

type Size = 'xs' | 'sm' | 'md' | 'lg';

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
  padding: 0.375rem 0.75rem;
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  line-height: 1;

  &:focus {
    border-bottom: 1px solid ${uiColors('primary.main')};
  }

  ${ifProp(
    { type: 'search' },
    css`
      padding-left: 2rem !important;
      ::placeholder {
        position: relative !important;
        left: 0.1rem !important;
      }

      ::-webkit-search-decoration,
      ::-webkit-search-cancel-button,
      ::-webkit-search-results-button,
      ::-webkit-search-results-decoration {
        cursor: pointer;
      }
    `
  )};
  ${switchProp('size', {
    xs: css`
      font-size: ${fontSizes('extraSmall')};
      padding: 0.1875rem 0.25rem;
    `,
    sm: css`
      font-size: ${fontSizes('small')};
      padding: 0.375rem 0.5rem;
    `,
    md: css`
      font-size: ${fontSizes('medium')};
      padding: 0.5625rem 0.75rem;
    `,
    lg: css`
      font-size: ${fontSizes('large')};
      padding: 0.75rem 1rem;
    `,
  })};
`;

const InputIcon = styled(Icon)`
  position: absolute;
  color: ${colors.darkGray};
  left: 0.5rem;
  top: 33%;
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
  size?: Size,
  style?: Object,
  className?: string,
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  ({ type, placeholder, onChange, size, style, className, ...rest }: Props, ref) => {
    const onInputChange = (e: SyntheticEvent<HTMLInputElement>): any => {
      e.persist();
      if (onChange) {
        onChange(e);
      }
    };

    return type === 'search' ? (
      <SearchWrapper style={style} className={className}>
        <InputIcon size={size} name="search" />
        <StyledInput
          size={size}
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...rest}
          onChange={onInputChange}
        />
      </SearchWrapper>
    ) : (
      <StyledInput
        style={style}
        className={className}
        size={size}
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        {...rest}
      />
    );
  }
);

Input.defaultProps = {
  size: 'md',
  style: {},
  className: '',
};

/** @component */
export default Input;
