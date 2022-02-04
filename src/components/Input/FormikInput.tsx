import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';
import styled from 'styled-components';
import { AnalyticsProps } from 'index';
import Input from './Input';

const InputContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-column-end: span 12;
  grid-row-end: span 1;
  flex: 1;
`;

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> & FieldProps & AnalyticsProps;

const FormikInput: FunctionComponent<Props> = ({
  id,
  field,
  value,
  form: _,
  placeholder = '',
  tag = '',
  ...rest
}) => {
  const { name: fieldName, ...fieldRest } = field;

  return (
    <InputContainer>
      <Input
        tag={tag}
        type="text"
        id={id || fieldName}
        placeholder={placeholder}
        name={fieldName}
        {...fieldRest}
        {...rest}
        value={value ?? fieldRest.value}
      />
    </InputContainer>
  );
};

export default FormikInput;
