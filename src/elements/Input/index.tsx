import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { MdSearch } from 'react-icons/md';
import { fontWeights, fontSizes } from '../../utils';
import colors from '../../theme/colors';

const StyledInput = styled.input`
  width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  color: ${props => props.theme.palette.primary.main};
  transition: all ease 300ms;
  background: ${colors.white};
  font-weight: ${fontWeights('light')};
  padding: 0.375em 0.75em;
  border: 1px solid ${colors.gray};
  border-radius: 0.188em;
  font-size: ${fontSizes('medium')};
  line-height: 1;

  &:focus {
    border-bottom: 1px solid ${props => props.theme.palette.primary.main};
  }

  padding-left: ${(props: Props) => (props.icon ? '2rem !important' : null)};
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

const IconContainer = styled.div`
  position: absolute;
  color: ${colors.darkGray};
  left: 0.5rem;
  top: 33%;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

interface Props {
  type: string;
  placeholder: string;
  id: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => any;
  value: string | Array<string> | number;
  size?: number | undefined;
  style?: Record<string, any>;
  className?: string;
  icon?: Node;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, onChange, size, style, className, icon, ...rest }: Props, ref) => {
    const onInputChange = (e: SyntheticEvent<HTMLInputElement>): any => {
      e.persist();
      if (onChange) {
        onChange(e);
      }
    };

    return type === 'search' ? (
      <InputWrapper style={style} className={className}>
        <IconContainer>
          <MdSearch />
        </IconContainer>
        <StyledInput
          size={size}
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...rest}
          onChange={onInputChange}
        />
      </InputWrapper>
    ) : (
      <InputWrapper style={style} className={className}>
        <IconContainer>{icon}</IconContainer>
        <StyledInput
          size={size}
          ref={ref}
          type={type || 'text'}
          placeholder={placeholder}
          onChange={onInputChange}
          icon={icon}
          {...rest}
        />
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

Input.defaultProps = {
  size: 1,
  style: {},
  className: '',
  icon: undefined,
};

/* @component */
export default Input;
