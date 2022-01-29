import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';
import styled from 'styled-components';
import { Input, AnalyticsProps } from '../../index';

interface OwnProps extends AnalyticsProps {
  label?: string;
  size?: any;
  inlineLabel?: boolean;
  tooltip?: string;
  showPasswordIcon?: boolean;
}

const InputContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-column-end: span 12;
  grid-row-end: span 1;
`;

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> & FieldProps & OwnProps;

const FormikInput: FunctionComponent<Props> = ({
  id,
  field,
  disabled = false,
  value,
  form: _,
  tag = '',
  placeholder = '',
  ...rest
}) => {
  const { name: fieldName, ...fieldRest } = field;

  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
        tag={tag}
        type="text"
        id={id || fieldName}
        name={fieldName}
        // disabled={disabled}
        {...fieldRest}
        {...rest}
        value={value ?? fieldRest.value}
      />
    </InputContainer>
  );
};

export default FormikInput;
