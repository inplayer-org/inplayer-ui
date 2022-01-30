import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';
import styled from 'styled-components';
import { AnalyticsProps } from '../../analytics/index';
import Input from '../Input/Input';

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
        {...fieldRest}
        {...rest}
        value={value ?? fieldRest.value}
      />
    </InputContainer>
  );
};

export default FormikInput;
